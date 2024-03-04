// import React, { useState } from 'react';

// function ProductSpec() {
//     const [activeHeader, setActiveHeader] = useState('Overview');

//     const handleHeaderClick = (header: any) => {
//         setActiveHeader(header);
//     };
//     return (
//         <section>
//             <div className='bg-white rounded-lg p-10 shadow my-10 '>
//                 <div className='flex gap-10 mb-5 font-bold text-xl'>
//                     <h1 onClick={() => handleHeaderClick('Overview')} className={activeHeader === 'Overview' ? 'cursor-pointer text-[#1941e1] border-b-2 border-[#1941e1] pb-2' : 'cursor-pointer'}>Overview</h1>
//                     <h1 onClick={() => handleHeaderClick('Description')} className={activeHeader === 'Description' ? 'cursor-pointer text-[#1941e1] border-b-2 border-[#1941e1] pb-2' : 'cursor-pointer'}>Description</h1>
//                     <h1 onClick={() => handleHeaderClick('Warranty')} className={activeHeader === 'Warranty' ? 'cursor-pointer text-[#1941e1] border-b-2 border-[#1941e1] pb-2' : 'cursor-pointer'}>Warranty</h1>
//                     <h1 onClick={() => handleHeaderClick('Reviews')} className={activeHeader === 'Reviews' ? 'cursor-pointer text-[#1941e1] border-b-2 border-[#1941e1] pb-2' : 'cursor-pointer'}>Reviews</h1>
//                 </div>
//                 <div>
//                     {activeHeader === 'Overview' && (
//                         <div>
//                             <h2>KEY FEATURES</h2>
//                             <p>Easy to handle</p>
//                             <p>48v batteries</p>
//                             <p>The length of the outlet pipe: 5mIt is easy to start in that you insert the 98V battery and then get started. The handheld pressure washer allows you to start immediately</p>
//                         </div>
//                     )}
//                     {activeHeader === 'Description' && (
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit velit nec neque tristique, id aliquam lectus tempor.</p>
//                     )}
//                     {activeHeader === 'Warranty' && (
//                         <p>Warranty information goes here.</p>
//                     )}
//                     {activeHeader === 'Reviews' && (
//                         <p>Customer reviews go here.</p>
//                     )}
//                 </div>
//             </div>
//         </section>

//     )
// }

// export default ProductSpec


// import React, { useState } from 'react';

// function ProductSpec() {
//     const [activeHeader, setActiveHeader] = useState('Overview');

//     const handleHeaderClick = (header: string) => {
//         setActiveHeader(header);
//     };

//     return (
//         <section>
//             <div className='bg-white rounded-lg p-6 md:p-10 shadow my-10'>
//                 <div className='flex flex-col md:flex-row gap-6 items-start justify-between mb-5 font-bold text-lg'>
//                     <h1 onClick={() => handleHeaderClick('Overview')} className={activeHeader === 'Overview' ? 'cursor-pointer text-[#1941e1] border-b-2 border-[#1941e1] pb-2' : 'cursor-pointer'}>Overview</h1>
//                     <h1 onClick={() => handleHeaderClick('Description')} className={activeHeader === 'Description' ? 'cursor-pointer text-[#1941e1] border-b-2 border-[#1941e1] pb-2' : 'cursor-pointer'}>Description</h1>
//                     <h1 onClick={() => handleHeaderClick('Warranty')} className={activeHeader === 'Warranty' ? 'cursor-pointer text-[#1941e1] border-b-2 border-[#1941e1] pb-2' : 'cursor-pointer'}>Warranty</h1>
//                     <h1 onClick={() => handleHeaderClick('Reviews')} className={activeHeader === 'Reviews' ? 'cursor-pointer text-[#1941e1] border-b-2 border-[#1941e1] pb-2' : 'cursor-pointer'}>Reviews</h1>
//                 </div>
//                 <div className='text-gray-700'>
//                     {activeHeader === 'Overview' && (
//                         <div>
//                             <h2 className='text-xl font-semibold mb-2'>KEY FEATURES</h2>
//                             <ul className='list-disc pl-5'>
//                                 <li>Easy to handle</li>
//                                 <li>48v batteries</li>
//                                 <li>The length of the outlet pipe: 5m</li>
//                             </ul>
//                         </div>
//                     )}
//                     {activeHeader === 'Description' && (
//                         <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit velit nec neque tristique, id aliquam lectus tempor.</p>
//                     )}
//                     {activeHeader === 'Warranty' && (
//                         <p className='text-lg'>Warranty information goes here.</p>
//                     )}
//                     {activeHeader === 'Reviews' && (
//                         <p className='text-lg'>Customer reviews go here.</p>
//                     )}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ProductSpec;



import React, { useState } from 'react';

function ProductSpec() {
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
                        <p className='text-lg'>Warranty information goes here.</p>
                    )}
                    {activeHeader === 'Reviews' && (
                        <p className='text-lg'>Customer reviews go here.</p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ProductSpec;
