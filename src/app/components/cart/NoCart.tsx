import React from 'react';
import { BsCartXFill } from "react-icons/bs";
function NoCart() {
    const styles = {
        button: "bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none",
        container: "container mx-auto px-3 md:px-[100px]",
        box: "bg-white shadow-lg rounded-lg p-10 text-center"
    }
    return (
        <div className={styles.container}>
            <div className='flex justify-center my-10'>
                <section className={styles.box}>
                    <div className='flex justify-center'>
                        <BsCartXFill size={80} color='red' />
                    </div>
                    <h3 className='font-bold my-5 text-2xl'>Your cart is empty.</h3>
                    <p className='text-gray-600 mb-5'>Looks like you haven&apos;t added any items to your cart yet.</p>
                    <button className={styles.button}>
                        Explore Products
                    </button>
                </section>
            </div>
        </div>
    );
}

export default NoCart;
