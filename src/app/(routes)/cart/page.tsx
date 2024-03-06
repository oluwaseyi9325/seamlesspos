"use client"
import Navbar from '@/app/components/Navbar';
import NoCart from '@/app/components/cart/NoCart';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState,useEffect } from 'react';
import { IoArrowBackCircle } from "react-icons/io5";

function CartPage() {
    const [noCartHere,setNoCartHere]=useState(true)
    const [cartDetails, setCartDetails] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        // Retrieve cart details from local storage
        const storedCart = localStorage.getItem("cartDetails");
        if (storedCart) {
            const cartArray = JSON.parse(storedCart);
            setCartDetails(cartArray);
            fetchProducts(cartArray);
        } else {
            setLoading(false);
        }
    }, []);

    const fetchProducts = async (cartArray: string[]) => {
        try {
            const productPromises = cartArray.map(async (productId) => {
                const response = await fetch(`http://localhost:8080/products/${productId}`);
                return await response.json();
            });
            const productResults = await Promise.all(productPromises);
            setProducts(productResults);
            setLoading(false);
        } catch (error) {
            setError('Error fetching products');
            setLoading(false);
        }
    };

    if (loading) {
        return <div className='flex justify-center'>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!products[0]) {
      return(
       <div>
        <Navbar/>
            <div className=" h-[50px] lg:h-[60px]"></div> 
         <NoCart/>
       </div>
      )  
    }
    return (
     <div>
          <Navbar/>
            <div className=" h-[50px] lg:h-[60px]"></div> 
           <div className='container mx-auto px-3 md:px-[100px] my-10'>
            <div className='mb-5'>
                <Link href="/" passHref>
                    <button className='border border-blue-950 bg-blue-950 text-white p-3 rounded-lg font-bold flex items-center gap-2'>
                        <IoArrowBackCircle />
                        <span>Continue Shopping</span>
                    </button>
                </Link>
            </div>
            <section className='md:flex justify-between gap-10'>
                <div className='bg-white md:w-5/5 w-full rounded-lg shadow overflow-x-auto'>
                    <table className='w-full'>
                        <thead className='bg-gray-200'>
                            <tr>
                                <th className='py-2 px-3 font-semibold text-start'>Item Details</th>
                                <th className='py-2 px-3 font-semibold'>Quantity</th>
                                <th className='py-2 px-3 font-semibold'>Item Price</th>
                                <th className='py-2 px-3 font-semibold'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((val, i) => (
                                <tr key={i} className='border-b border-gray-200'>
                                    <td className='py-3 px-3'>
                                        <div className='flex items-center gap-5'>
                                            <div className='relative w-24 h-24 md:w-32 md:h-32'>
                                           
                                                <Image src={val.image[0]} alt='' layout="fill" objectFit="cover" className='rounded-md' />
                                            </div>
                                            <div>
                                                <p className='font-semibold'>{val.name}</p>
                                                <p className='text-gray-500 text-sm'>Sold by Seamlesspos</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-3 px-3'>
                                        <div className='flex items-center'>
                                            <button className='focus:outline-none bg-gray-100 text-gray-700 px-2 py-1 rounded-md'>-</button>
                                            <span className='mx-2'>1</span>
                                            <button className='focus:outline-none bg-gray-100 text-gray-700 px-2 py-1 rounded-md'>+</button>
                                        </div>
                                    </td>
                                    <td className='py-3 px-3 font-semibold'>{val.price}</td>
                                    <td className='py-3 px-3'>
                                        <button className='text-red-500 font-semibold hover:text-red-600 focus:outline-none'>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className=' md:w-2/5 w-full'>
                    <div className='bg-white p-5 rounded-lg shadow'>
                        <div className='flex justify-between items-center mb-3'>
                            <h3 className='font-bold text-xl'>Order Summary</h3>
                            <span>2 Items</span>
                        </div>
                        <div className='border-b border-gray-200 mb-5'></div>
                        <div className='flex justify-between items-center mb-3'>
                            <span className='font-bold text-xl'>Total</span>
                            <span>$356,438</span>
                        </div>
                        <div className='border-b border-gray-200 mb-5'></div>
                        <button className='bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none w-full'>Proceed to Checkout</button>
                    </div>
                </div>
            </section>
        </div>
     </div>
    );
}

export default CartPage;

// "use client"
// import Navbar from '@/app/components/Navbar';
// import NoCart from '@/app/components/cart/NoCart';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import { IoArrowBackCircle } from "react-icons/io5";

// function CartPage() {
//     const [cartDetails, setCartDetails] = useState<string[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//     const [products, setProducts] = useState<any[]>([]);

//     useEffect(() => {
//         // Retrieve cart details from local storage
//         const storedCart = localStorage.getItem("cartDetails");
//         if (storedCart) {
//             const cartArray = JSON.parse(storedCart);
//             setCartDetails(cartArray);
//             fetchProducts(cartArray);
//         } else {
//             setLoading(false);
//         }
//     }, []);

//     const fetchProducts = async (cartArray: string[]) => {
//         try {
//             const productPromises = cartArray.map(async (productId) => {
//                 const response = await fetch(`http://localhost:8080/products/${productId}`);
//                 return await response.json();
//             });
//             const productResults = await Promise.all(productPromises);
//             setProducts(productResults);
//             setLoading(false);
//         } catch (error) {
//             setError('Error fetching products');
//             setLoading(false);
//         }
//     };

//     if (loading) {
//         return <div className='flex justify-center'>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <Navbar/>
//             <div className="h-[50px] lg:h-[60px]"></div> 
//             <div className='container mx-auto px-3 md:px-[100px] my-10'>
//                 <div className='mb-5'>
//                     <Link href="/" passHref>
//                         <button className='border border-blue-950 bg-blue-950 text-white p-3 rounded-lg font-bold flex items-center gap-2'>
//                             <IoArrowBackCircle />
//                             <span>Continue Shopping</span>
//                         </button>
//                     </Link>
//                 </div>
//                 <section className='md:flex justify-between gap-10'>
//                     <div className='bg-white md:w-5/5 w-full rounded-lg shadow overflow-x-auto'>
//                         <table className='w-full'>
//                             <thead className='bg-gray-200'>
//                                 <tr>
//                                     <th className='py-2 px-3 font-semibold text-start'>Item Details</th>
//                                     <th className='py-2 px-3 font-semibold'>Quantity</th>
//                                     <th className='py-2 px-3 font-semibold'>Item Price</th>
//                                     <th className='py-2 px-3 font-semibold'>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {products.map((product, index) => (
//                                     <tr key={index} className='border-b border-gray-200'>
//                                         {/* Render your product details here */}
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                     <div className='md:w-2/5 w-full'>
//                         {/* Render your order summary here */}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// }

// export default CartPage;

