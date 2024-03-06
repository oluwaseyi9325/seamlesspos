import { ProductInterface } from '@/app/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { toast } from 'react-toastify';
interface ProductCardProps {
    product:ProductInterface
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const cartBtn = () => {
        const existingCart = localStorage.getItem("cartDetails");
        const cartArray = existingCart ? JSON.parse(existingCart) : [];
        cartArray.push(product.id);
        localStorage.setItem("cartDetails", JSON.stringify(cartArray));
        toast("Cart added!")
    };
    
    const styles={
        button:"bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none text-sm",
        container:"bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 border"
    }
    return (
        <div className={styles.container}>
            <Link href={`/products/${product.id}?product_name=${product.name}`}>
                <div className="relative aspect-w-3 aspect-h-4 mb-4 ">
                    <Image src={product?.image[0]} width={300} height={300} alt={product.name} className="object-cover w-ful rounded-lg" />
                    <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-full text-xs">{product.category}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                    <ReactReadMoreReadLess readMoreText={""} charLimit={18}>{product.name}
                    </ReactReadMoreReadLess>
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                    <ReactReadMoreReadLess readMoreText={""} charLimit={50}>{product.description}
                    </ReactReadMoreReadLess>
                </p>
                </Link>
                <div className="flex justify-between items-center mb-2">
                    <p className="text-gray-800 font-semibold">${product.price}</p>
                    <button onClick={()=>cartBtn()} className={styles.button}>
                        Add to Cart
                    </button>
                </div>
           
        </div>
    );
};

export default ProductCard;


