

import React, { useState } from 'react';
import { FaStairs } from 'react-icons/fa6';

function ProductSpec({ product }: any) {
    const [activeHeader, setActiveHeader] = useState('Overview');

    const handleHeaderClick = (header: any) => {
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
                        <div>
                            <h2 className='text-xl font-semibold mb-2'>KEY FEATURES</h2>
                            <ul className='list-disc pl-5'>
                                {
                                    [product?.overviews?.map((item: any, i: any) => {
                                        return (
                                            <li key={i}>{item}</li>

                                        )
                                    })]
                                }
                            </ul>
                        </div>
                    )}
                    {activeHeader === 'Description' && (
                        <p className='text-lg'>{product?.description}</p>
                    )}
                    {activeHeader === 'Warranty' && (
                        <div>
                            {/* <h2 className='text-xl font-semibold mb-2'>Warranty</h2> */}
                            <p className='text-lg'>{product.warranty}</p>
                        </div>
                    )}
                    {activeHeader === 'Reviews' && (
                        <div>
                            <h2 className='text-xl font-semibold mb-2'>Customer Reviews</h2>
                            {product?.reviews.map((review:any) => (
                                <div key={review.id} className='mb-3'>
                                    <div className='flex justify-between items-center'>
                                        <h3 className='text-lg font-semibold'>{review.reviewsMessag}</h3>
                                        <p className='text-sm text-gray-500'>{review.time}</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-lg mr-2'>Rating:</span>
                                        {[...Array(review.rate)].map((_, i) => (
<FaStairs/>
                                        ))}
                                    </div>
                                    <p className='text-lg'>{review.text}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ProductSpec;
