

import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }: any) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 border">
            <div className="relative aspect-w-3 aspect-h-4 mb-4">
                <Image src={product.image} width={300} height={300} alt={product.name} className="object-cover rounded-lg" />
                <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-full text-xs">{product.category}</div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <div className="flex justify-between items-center mb-2">
                <p className="text-gray-800 font-semibold">{product.price}</p>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none text-sm">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;


