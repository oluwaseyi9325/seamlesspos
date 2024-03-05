import React, { useState } from 'react';
import OverviewComponent from './products/productDetails/Overviews';
import WarrantyComponent from './products/productDetails/Warranty';
import ReviewsComponent from './products/productDetails/Reviews';
import DescriptionComponent from './products/productDetails/Description';

function ProductSpec({ product }:any) {
    const [activeHeader, setActiveHeader] = useState('Overview');

    const handleHeaderClick = (header:any) => {
        setActiveHeader(header);
    };

    return (
        <section>
            <div className='bg-white rounded-lg p-6 md:p-10 shadow my-10'>
                <div className='flex flex-col md:flex-row gap-6 items-start justify-between mb-5 font-bold text-lg'>
                    <h1 onClick={() => handleHeaderClick('Overview')} className={activeHeader === 'Overview' ? 'cursor-pointer text-[#1941e1] border-b-2 border-[#1941e1] pb-2' : 'cursor-pointer'}>Overview</h1>
                    <h1 onClick={() => handleHeaderClick('Description')} className={activeHeader === 'Description' ? 'cursor-pointer text-[#1941e1] border-b-2 border-[#1941e1] pb-2' : 'cursor-pointer'}>Description</h1>
                    <h1 onClick={() => handleHeaderClick('Warranty')} className={activeHeader === 'Warranty' ? 'cursor-pointer text-[#1941e1] border-b-2 border-[#1941e1] pb-2' : 'cursor-pointer'}>Warranty</h1>
                    <h1 onClick={() => handleHeaderClick('Reviews')} className={activeHeader === 'Reviews' ? 'cursor-pointer text-[#1941e1] border-b-2 border-[#1941e1] pb-2' : 'cursor-pointer'}>Reviews</h1>
                </div>
                <div className='text-gray-700'>
                    {activeHeader === 'Overview' && (
                        <OverviewComponent overviews={product?.overviews} />
                    )}
                    {activeHeader === 'Description' && (
                        <DescriptionComponent description={product?.description} />
                    )}
                    {activeHeader === 'Warranty' && (
                        <WarrantyComponent warranty={product?.warranty} />
                    )}
                    {activeHeader === 'Reviews' && (
                        <ReviewsComponent reviews={product?.reviews} />
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProductSpec;
