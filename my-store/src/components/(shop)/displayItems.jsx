"use client";
import { useState, useEffect } from 'react';
import ViewItemButton from './viewItemButton';

export default function DisplayItems( { category } ) {
    const [items, setItems] = useState([]);
    const [visibleCount, setVisibleCount] = useState(9);

    useEffect(() => {
        async function fetchItems() {
            const res = await fetch('https://fakestoreapi.com/products/');
            const data = await res.json();

            if (category != 'all') {
                const filteredData = data.filter((item) => item.category === category);
                    setItems(filteredData);
            }
            else {
                setItems(data);
            }
        }
        fetchItems();
    }, [category]);

    const loadMoreItems = () => {
        setVisibleCount((prevCount) => prevCount + 9);
    };

    return (
        <div className="flex flex-wrap bg-primary w-full rounded-lg border-4 border-primary my-[60px] p-4 relative">
            <h1 className="w-full text-center text-3xl font-bold mb-6">Trending Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-16 w-full">
                {items.slice(0, visibleCount).map((item) => (
                    <div key={item.id} id={item.id} className="bg-white items-center justify-center p-5 shadow-md rounded-lg overflow-hidden">
                        <img className="w-full h-48 object-contain mb-4" src={item.image} alt={item.title} />
                        <div className="p-4">
                            <h1 className="text-2xl font-bold mb-2 text-center">
                                {item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}
                            </h1>
                            <p className="text-xl font-bold text-center">${item.price}</p>
                            <p className="text-center">{item.Eta ?? "2 Days shipping"}</p>
                            <ViewItemButton itemId={item.id} />
                        </div>
                    </div>
                ))}
            </div>
            {visibleCount < items.length && (
                <div className="w-full flex justify-center mt-6">
                    <button onClick={loadMoreItems} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}