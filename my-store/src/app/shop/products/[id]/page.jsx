    "use client";

    import { useState, useEffect, useRef } from "react";
    import { likeProductSwitch } from "@/actions/productActions";
    import Image from "next/image";
    import Link from "next/link";
    import "@/styles/globals.css";

    export default function ShopItem({ params }) {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [liked, setLiked] = useState(false);
    const [added, setAdded] = useState(false);
    const formRef = useRef();

    useEffect(() => {
        const fetchItem = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        const data = await res.json();
        setItem(data);
        setLoading(false);

        // Retrieve like status from localStorage
        const likeStatus = localStorage.getItem(`liked-${data.id}`);
        if (likeStatus) {
            setLiked(JSON.parse(likeStatus));
        }

        // Retrieve cart status from localStorage
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const isAdded = cart.some(cartItem => cartItem.id === data.id);
        setAdded(isAdded);
        };
        fetchItem();
    }, [params.id]);

    const handleLike = async (e) => {
        e.preventDefault();
        try {
        const updatedItem = await likeProductSwitch(item.id, liked);
        setLiked(updatedItem.liked);

        // Save like status to localStorage
        localStorage.setItem(`liked-${item.id}`, JSON.stringify(updatedItem.liked));
        } catch (error) {
        console.error("Failed to update like status:", error);
        }
    };

    const addToCart = (e) => {
        e.preventDefault();
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (!added) {
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Item added to cart:", item);
        setAdded(true);
        } else {
        cart = cart.filter(cartItem => cartItem.id !== item.id);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Item removed from cart:", item);
        setAdded(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-wrap bg-primary w-full rounded-lg border-4 border-primary my-4 p-4">
        <h1 className="w-full text-center text-3xl font-bold mb-6">{item.title}</h1>
        <button onClick={() => window.history.back()} className="bg-Primary text-white font-bold py-2 px-3 rounded ml-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
        </button>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image className="w-full h-48 object-contain mb-4" src={item.image} alt={item.title} width={200} height={200} />
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
            <p className="text-lg mb-2">{item.description}</p>
            <p className="text-xl font-bold mb-2">${item.price}</p>
            <p className="text-lg mb-2">Category: {item.category}</p>
            <p className="text-lg mb-2">Rating: {item.rating?.rate} / 5 ({item.rating?.count} reviews)</p>
            <div className="flex items-center justify-center">
                <button onClick={addToCart} className="bg-Secondary text-white font-bold py-2 h-[48px] px-4 rounded ml-5">
                {added ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg> : "Add to Cart"  
                } 
                </button>
                <form ref={formRef} onSubmit={handleLike}>
                {liked ? 
                    <button type="submit" className="bg-Primary text-white font-bold py-2 h-[48px] px-4 rounded ml-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    </button>
                : <button type="submit" className="bg-Primary text-white font-bold py-2 h-[48px] px-4 rounded ml-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    </button>  
                }
                </form>
            </div>
            </div>
        </div>
        </div>
    );
    }