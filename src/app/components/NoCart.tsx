import Image from 'next/image'
import React from 'react'
import { BsCartXFill } from "react-icons/bs";
function NoCart() {
    return (
        <div className='flex justify-center'>
            <section className='bg-white p-10 text-center'>
                <BsCartXFill size={40} color='red' />
                <h3 className='font-bold'>Your cart is empty.</h3>
                <div>You have not added any item to your cart.</div>
            </section>
        </div>
    )
}

export default NoCart