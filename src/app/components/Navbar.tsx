// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeNavbar = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="bg-gray-800 py-4 relative">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <a href="#" className="text-white text-xl font-bold">My Ecommerce POS</a>
//         </div>
//         <div className="hidden md:flex items-center space-x-4">
//           <a href="#" className="text-white hover:text-gray-300">Home</a>
//           <a href="#" className="text-white hover:text-gray-300">Products</a>
//           <a href="#" className="text-white hover:text-gray-300">About</a>
//           <a href="#" className="text-white hover:text-gray-300">Contact</a>
//         </div>
//         <div className="md:hidden">
//           <button
//             onClick={toggleNavbar}
//             className="text-white focus:outline-none focus:text-gray-300"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="absolute top-16 left-0 w-full  md:hidden flex justify-end">
//           <div className="px-2 py-4 space-y-2 shadow bg-gray-800   text-end w-36">
//             <a href="#" className="block text-white hover:text-gray-300" onClick={closeNavbar}>Home</a>
//             <a href="#" className="block text-white hover:text-gray-300" onClick={closeNavbar}>Products</a>
//             <a href="#" className="block text-white hover:text-gray-300" onClick={closeNavbar}>About</a>
//             <a href="#" className="block text-white hover:text-gray-300" onClick={closeNavbar}>Contact</a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import Image from 'next/image';
// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeNavbar = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="shadow py-4 md:px-20 fixed top-0 w-full z-50 backdrop-filter backdrop-blur-sm">
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <Image src={require("../assets/logo.png")} alt='' />
//         </div>
//         <div className="hidden text-[#1941e1] md:flex items-center space-x-4">
//           <a href="#" className=" hover:text-gray-300">Home</a>
//           <a href="#" className=" hover:text-gray-300">Products</a>
//           <a href="#" className=" hover:text-gray-300">About</a>
//           <a href="#" className=" hover:text-gray-300">Contact</a>
//         </div>
//         <div className="md:hidden">
//           <button
//             onClick={toggleNavbar}
//             className="text-[#1941e1] focus:outline-none focus:text-gray-300"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="absolute top-16 left-0 w-full bg-gray-800 md:hidden">
//           <div className="px-2 py-4 space-y-2">
//             <a href="#" className="block text-white hover:text-gray-300" onClick={closeNavbar}>Home</a>
//             <a href="#" className="block text-white hover:text-gray-300" onClick={closeNavbar}>Products</a>
//             <a href="#" className="block text-white hover:text-gray-300" onClick={closeNavbar}>About</a>
//             <a href="#" className="block text-white hover:text-gray-300" onClick={closeNavbar}>Contact</a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className=" shadow-lg py-4 md:px-20 fixed top-0 w-full z-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={require("../assets/logo.png")} alt='' width={220} height={60} />
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-[#1941e1] hover:text-[#19d7b4]">Home</a>
          <a href="#" className="text-[#1941e1] hover:text-[#19d7b4]">Products</a>
          <a href="#" className="text-[#1941e1] hover:text-[#19d7b4]">About</a>
          <a href="#" className="text-[#1941e1] hover:text-[#19d7b4]">Contact</a>
        </div>
        {/* <div className="md:flex items-center space-x-4">
          <button className="bg-[#1941e1] hover:bg-[#19d7b4] text-white py-2 px-4 rounded-md">Sign In</button>
          <button className="bg-[#19d7b4] hover:bg-[#1941e1] text-white py-2 px-4 rounded-md">Sign Up</button>
        </div> */}
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-[#1941e1] focus:outline-none focus:text-gray-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute  top-16 left-0 w-full  md:hidden flex justify-end">
          <div className="px-2 py-4 space-y-2 shadow backdrop-filter backdrop-blur-lg bg-slate-100 w-3/6 text-center rounded-t-lg">
            <a href="#" className="block hover:text-[#19d7b4]" onClick={closeNavbar}>Home</a>
            <a href="#" className="block  hover:text-[#19d7b4]" onClick={closeNavbar}>Products</a>
            <a href="#" className="block  hover:text-[#19d7b4]" onClick={closeNavbar}>About</a>
            <a href="#" className="block  hover:text-[#19d7b4]" onClick={closeNavbar}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
