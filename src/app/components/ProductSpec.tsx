

import React, { useState } from 'react';

function ProductSpec() {
    const [activeHeader, setActiveHeader] = useState('Overview');

    const handleHeaderClick = (header: any) => {
        setActiveHeader(header);
    };

    // Array of dummy reviews
    const reviews = [
        { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit velit nec neque tristique, id aliquam lectus tempor.', rating: 4, name: 'John Doe', time: '2 hours ago' },
        { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit velit nec neque tristique, id aliquam lectus tempor.', rating: 5, name: 'Jane Doe', time: '1 day ago' },
        { id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit velit nec neque tristique, id aliquam lectus tempor.', rating: 3, name: 'Alice Smith', time: '5 days ago' },
        { id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit velit nec neque tristique, id aliquam lectus tempor.', rating: 2, name: 'Bob Johnson', time: '1 week ago' },
        { id: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit velit nec neque tristique, id aliquam lectus tempor.', rating: 4, name: 'Emily Brown', time: '2 weeks ago' }
    ];

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
                                <li>Easy to handle</li>
                                <li>48v batteries</li>
                                <li>The length of the outlet pipe: 5m</li>
                            </ul>
                        </div>
                    )}
                    {activeHeader === 'Description' && (
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit velit nec neque tristique, id aliquam lectus tempor.</p>
                    )}
                    {activeHeader === 'Warranty' && (
                        <div>
                            <h2 className='text-xl font-semibold mb-2'>Warranty</h2>
                            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit velit nec neque tristique, id aliquam lectus tempor.</p>
                        </div>
                    )}
                    {activeHeader === 'Reviews' && (
                        <div>
                            <h2 className='text-xl font-semibold mb-2'>Customer Reviews</h2>
                            {reviews.map(review => (
                                <div key={review.id} className='mb-3'>
                                    <div className='flex justify-between items-center'>
                                        <h3 className='text-lg font-semibold'>{review.name}</h3>
                                        <p className='text-sm text-gray-500'>{review.time}</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-lg mr-2'>Rating:</span>
                                        {[...Array(review.rating)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9.293 1.293a1 1 0 0 1 1.414 0l3.533 3.533a1 1 0 0 1 .22 1.094l-1.067 3.28 3.378 2.463a1 1 0 0 1 .305 1.29l-2.05 3.837 3.703-.507a1 1 0 0 1 .61.166 1 1 0 0 1 .324 1.299l-2.667 3.333 1.28 3.76a1 1 0 0 1-1.532 1.067L10 17.402l-3.535 1.868a1 1 0 0 1-1.532-1.066l1.28-3.76-2.667-3.333a1 1 0 0 1 .324-1.299 1 1 0 0 1 .61-.166l3.703.507-2.05-3.837a1 1 0 0 1 .305-1.29l3.378-2.463-1.067-3.28a1 1 0 0 1 .22-1.094l3.533-3.533a1 1 0 0 1 1.414 0 1 1 0 0 1 .222 1.094l-1.067 3.28 3.378 2.463a1 1 0 0 1 .305 1.29l-2.05 3.837 3.703-.507a1 1 0 0 1 .61.166 1 1 0 0 1 .324 1.299l-2.667 3.333 1.28 3.76a1 1 0 0 1-1.532 1.067L10 17.402l-3.535 1.868a1 1 0 0 1-1.532-1.066l1.28-3.76-2.667-3.333a1 1 0 0 1 .324-1.299 1 1 0 0 1 .61-.166l3.703.507-2.05-3.837a1 1 0 0 1 .305-1.29l3.378-2.463-1.067-3.28a1 1 0 0 1 .222-1.094l3.533-3.533a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                                            </svg>
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
