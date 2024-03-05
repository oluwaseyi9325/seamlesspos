"use client"
import NoCart from '@/app/components/cart/NoCart';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoArrowBackCircle } from "react-icons/io5";

function CartPage() {
    const [noCartHere,setNoCartHere]=useState(true)
    if (noCartHere) {
      return(
        <NoCart/>
      )  
    }
    return (
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
                            {[1, 2, 3, 4, 6, 7].map((val, i) => (
                                <tr key={i} className='border-b border-gray-200'>
                                    <td className='py-3 px-3'>
                                        <div className='flex items-center gap-5'>
                                            <div className='relative w-24 h-24 md:w-32 md:h-32'>
                                                <Image src={require("../../assets/download (1).jpeg")} alt='' layout="fill" objectFit="cover" className='rounded-md' />
                                            </div>
                                            <div>
                                                <p className='font-semibold'>Infinix Hot40 Pro X6837 - 6.78" - 256gb</p>
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
                                    <td className='py-3 px-3 font-semibold'>$12.9</td>
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
    );
}

export default CartPage;
