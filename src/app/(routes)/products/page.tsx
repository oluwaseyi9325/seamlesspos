"use client"
import Navbar from '@/app/components/Navbar'
import ProductSection from '@/app/components/ProductSection'
import React from 'react'

function page() {
    const showStatus="all"
    return (
        <div>
            <Navbar/>
            <div className=" h-[50px] lg:h-[50px]"></div> 
            <ProductSection showStatus={showStatus} />
        </div>
    )
}

export default page