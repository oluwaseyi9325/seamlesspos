// import React from 'react';

// const ProductCard = ({ product }: any) => {
//     console.log(product, "hey")
//     return (
//         <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//             <img className="w-full h-64 object-cover object-center" src={product.image} alt={product.name} />
//             <div className="p-4">
//                 <h2 className="text-gray-800 text-lg font-semibold">{product.name}</h2>
//                 <p className="mt-2 text-gray-600">{product.description}</p>
//                 <div className="flex items-center justify-between mt-4">
//                     <span className="text-gray-700 font-bold">${product.price}</span>
//                     <button className="px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Add to Cart</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;


// import React from 'react';

// const ProductCard = ({ product}:any) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4">
//       <img src={product.image} alt={product.name} className="w-full h-auto mb-4 rounded-lg" />
//       <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//       <p className="text-gray-600 mb-2">{product.description}</p>
//       <p className="text-gray-800 font-semibold mb-2">${product.price}</p>
//       <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;

// import Image from 'next/image';
// import React from 'react';

// const ProductCard = ({ product }:any) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
//       <Image src={product.image} alt={product.name} className="w-full h-auto mb-4 rounded-lg" />
//       <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//       <p className="text-gray-600 mb-2">{product.description}</p>
//       <p className="text-gray-800 font-semibold mb-2">${product.price}</p>
//       <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;

import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }: any) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 border">
            <div className="relative aspect-w-3 aspect-h-4 mb-4">
                <Image src={product.image} alt={product.name} className="object-cover rounded-lg" />
                <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded-full text-xs">{product.category}</div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}fhasajkd....</p>
            <div className="flex justify-between items-center mb-2">
                <p className="text-gray-800 font-semibold">${product.price}</p>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none text-sm">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;


