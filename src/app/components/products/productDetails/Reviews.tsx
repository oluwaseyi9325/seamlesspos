import React from 'react';
import { FaStar } from "react-icons/fa";

function ReviewsComponent({ reviews }:any) {
    return (
        <div>
            <h2 className='text-xl font-semibold mb-2'>Customer Reviews</h2>
            {reviews.map((review:any) => (
                <div key={review.id} className='mb-3'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-lg font-semibold'>{review.reviewsMessag}</h3>
                        <p className='text-sm text-gray-500'>{review.time}</p>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-lg mr-2'>Rating:</span>
                        {[...Array(review.rate)].map((_, i) => (
                            <FaStar color='yellow' key={i} />
                        ))}
                    </div>
                    <p className='text-lg'>{review.text}</p>
                </div>
            ))}
        </div>
    );
}

export default ReviewsComponent;
