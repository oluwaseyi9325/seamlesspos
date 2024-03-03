


// import Image from 'next/image';
// import React from 'react';

// const Banner = () => {
//     return (
//         <section className="py-16 text-gray-900">
//             <div className="container mx-auto px-10 lg:flex items-center justify-between">
//                 <div className="lg:w-1/2 lg:pr-12">
//                     <div className="mt-5 text-4xl lg:text-6xl font-semibold">
//                         <span className='block text-[#1941e1]'>Sale 20% Off</span>
//                         <span className='block text-[#19d7b4]'>On Everything.</span>
//                     </div>
//                     <div className="my-6 text-lg lg:text-xl leading-relaxed">
//                         Discover a world of products at your fingertips with SEAMLESSPOS. From cutting-edge electronics to stylish fashion and essential home goods, we offer a diverse range of high-quality products to meet all your needs.
//                     </div>
//                     <div className="">
//                         <button className="bg-[#19d7b4] hover:bg-[#1941e1] text-white py-3 px-6 rounded-lg shadow-xl transition duration-300 ease-in">Shop Now</button>
//                     </div>
//                 </div>
//                 <div className="lg:w-1/2 mt-8 lg:mt-0">
//                     <Image src={require("../assets/banner.gif")} alt='' width={500} height={400} className="" />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Banner;

import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className="py-16 text-gray-900">
            <div className="container mx-auto px-10 md:px-20 lg:flex items-center justify-between">
                <div className="lg:w-1/2 lg:pr-12">
                    <div className="mt-5 text-3xl lg:text-5xl font-semibold">
                        <span className='block text-[#1941e1]'>Sale 20% Off</span>
                        <span className='block text-[#19d7b4]'>On Everything.</span>
                    </div>
                    <div className="my-6 text-base lg:text-lg leading-relaxed">
                        Discover a world of products at your fingertips with SEAMLESSPOS. From cutting-edge electronics to stylish fashion and essential home goods, we offer a diverse range of high-quality products to meet all your needs.
                    </div>
                    <div className="">
                        <button className="bg-[#19d7b4] hover:bg-[#1941e1] text-white py-3 px-6 rounded-lg shadow-xl transition duration-300 ease-in">Shop Now</button>
                    </div>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <div className="w-full lg:w-3/4 mx-auto">
                        <Image src={require("../assets/banner.gif")} alt='' width={700} height={400} className="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;

