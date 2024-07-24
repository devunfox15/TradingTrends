"use client";

import Link from 'next/link';


const ViewItemButton = ({ itemId, children }) => (
    <div className="flex justify-center mt-4">
        <Link href={`/shop/products/${itemId}`}>
            view item
        </Link>
    </div>
);

export default ViewItemButton;