// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
// const Footer = () => {
//   return (
//     <div className='bg-slate-200 md:px-20 md:pt-10 md:pb-10 p-10'>
//       <div className='md:flex justify-between gap-5 my-10 items-center'>
//         <div>
//           <Image src={require("../assets/logo.png")} alt='' width={250} />
//           <div className='flex justify-between mt-5 text-xl'>
//             <FaFacebook />
//             <FaTwitter />
//             <FaLinkedin />
//             <FaInstagram />
//           </div>
//         </div>
//         <div className='flex justify-between gap-5'>
//           <Link href="/">About US</Link>
//           <Link href="/">About US</Link>
//           <Link href="/">About US</Link>
//         </div>
//       </div>
//       <div className='border border-slate-400'></div>
//       <div className='md:flex justify-between mt-5'>
//         <div>@ 2024 Seamlesspos</div>
//         <div>All Right Reserved</div>
//       </div>

//     </div>
//   );
// };

// export default Footer;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 px-6 py-12 md:px-20 md:py-10">
      <div className="container mx-auto">
        <div className="md:flex justify-between items-center">
          <div className="md:w-1/2">
            <div className="mb-6">
              <Image src={require("../assets/logo.png")} alt="Company Logo" width={250} height={50} />
            </div>
            <div className="flex mt-5 space-x-4 text-xl">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
            </div>
          </div>
          <div className="md:w-1/2 md:flex justify-end items-center">
            <div className="space-x-6 md:ml-8">
              <Link href="/" className="text-gray-800 hover:text-gray-600">About Us</Link>
              <Link href="/" className="text-gray-800 hover:text-gray-600">Contact Us</Link>
              <Link href="/" className="text-gray-800 hover:text-gray-600">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <hr className="my-8 border border-gray-400" />
        <div className="text-center text-sm text-gray-600">© 2024 Seamlesspos. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;

