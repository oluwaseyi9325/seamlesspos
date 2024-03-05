"use client"
import ProductSection from '@/app/components/ProductSection'
import React from 'react'

function page() {
    const showStatus="all"
    return (
        <div>
            <ProductSection showStatus={showStatus} />
        </div>
    )
}

export default page