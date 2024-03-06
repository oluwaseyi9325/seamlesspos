"use client"
import Navbar from '@/app/components/Navbar'
import ProductSection from '@/app/components/ProductSection'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
function page() {
    const showStatus="all"
    return (
        <div>
            <Navbar/>
            <ToastContainer />
            <div className=" h-[50px] lg:h-[50px]"></div> 
            <ProductSection showStatus={showStatus} />
        </div>
    )
}

export default page