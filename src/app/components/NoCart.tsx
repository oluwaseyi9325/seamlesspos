import Image from 'next/image'
import React from 'react'
import { BsCartXFill } from "react-icons/bs";
function NoCart() {
    return (
        <div className=''>
            <div className='flex justify-center  my-10 '>
                <section className='bg-white shadow p-10 text-center'>
                    <div className='flex justify-center'>
                        <BsCartXFill size={80} color='red' />
                    </div>
                    <h3 className='font-bold my-5 text-2xl'>Your cart is empty.</h3>
                    <div className='text-slate-800'>You have not added any item to your cart.</div>
                </section>
            </div>
        </div>
    )
}

export default NoCart