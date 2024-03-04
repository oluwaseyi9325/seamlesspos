// import Image from 'next/image';
// import React from 'react';

// function CartPage() {
//     // Dummy data for cart items
//     const cartItems = [
//         { id: 1, name: 'Product 1', price: 50, quantity: 2, image: '/product1.jpg' },
//         { id: 2, name: 'Product 2', price: 70, quantity: 1, image: '/product2.jpg' },
//         { id: 3, name: 'Product 3', price: 30, quantity: 3, image: '/product3.jpg' },
//     ];

//     return (
//         <div className="container mx-auto py-8">
//             <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {cartItems.map(item => (
//                     <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
//                         <div className="relative w-full h-40 mb-4">
//                             <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="rounded-md" />
//                         </div>
//                         <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
//                         <p className="text-gray-600 mb-2">Price: ${item.price}</p>
//                         <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
//                         <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none">
//                             Remove
//                         </button>
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-8 flex justify-end">
//                 <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none">
//                     Proceed to Checkout
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default CartPage;



// import Image from 'next/image';
// import React from 'react';

// function CartPage() {
//   // Dummy data for cart items
//   const cartItems = [
//     { id: 1, name: 'Product 1', price: 50, quantity: 2, image: '/product1.jpg' },
//     { id: 2, name: 'Product 2', price: 70, quantity: 1, image: '/product2.jpg' },
//     { id: 3, name: 'Product 3', price: 30, quantity: 3, image: '/product3.jpg' },
//   ];

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cartItems.map(item => (
//           <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
//             <div className="flex items-center">
//               <div className="relative w-20 h-20 mr-4">
//                 <Image src={require("../../assets/download (1).jpeg")} alt={item.name} layout="fill" objectFit="cover" className="rounded-md" />
//               </div>
//               <div>
//                 <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
//                 <p className="text-gray-600 mb-2">Price: ${item.price}</p>
//                 <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
//               </div>
//             </div>
//             <button className="text-red-500 font-semibold hover:text-red-600 focus:outline-none">
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="mt-8 flex justify-end">
//         <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none">
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CartPage;




import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className='px-3 md:px-[100px]'>
            <section className='md:flex justify-between gap-10 my-10'>
                <div className='bg-white md:w-1/2 w-full rounded-lg shadow '>
                    <div className='bg-slate-200 p-2 flex justify-between p-3'>
                        <span>Items Details</span>
                        <span>Quantity</span>
                        <span>Item Price</span>
                        <span>Action</span>
                    </div>
                    <div className='p-5'>
                        {
                            [1, 2, 3, 4, 6, 7].map((val, i) => {
                                return (
                                    <div className='flex justify-between py-3'>
                                        <div className='flex justify-between gap-5'>
                                            <Image width={50} src={require("../../assets/download (1).jpeg")} alt='' />
                                            <div>
                                                <span>Infinix Hot40 Pro X6837 - 6.78" - 256gb</span>
                                                <span className='block'>Sold by Seamlesspos</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="border border-gray-300 rounded-md flex items-center px-3">
                                                <button className="focus:outline-none">-</button>
                                                <span className="mx-2">1</span>
                                                <button className="focus:outline-none">+</button>
                                            </div>
                                        </div>
                                        <div>
                                            $12.9
                                        </div>
                                        <div>
                                            Remove
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='bg-white p-5 rounded-lg shadow'>
                    <h3 className='flex gap-10 justify-around font-bold text-xl'>
                        <span>Order Summary</span>
                        <span>2 Items</span>
                    </h3>
                    <div className='border border-slate-400'></div>
                </div>
            </section>
        </div>
    )
}

export default page