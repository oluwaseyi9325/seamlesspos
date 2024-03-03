import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-slate-200 md:px-20 md:pt-10 md:pb-10 p-10'>
      <div className='md:flex justify-between gap-5 my-10 items-center'>
        <div>
          <Image src={require("../assets/logo.png")} alt='' width={250} />
          <div>

          </div>
        </div>
        <div className='flex justify-between gap-5'>
          <Link href="/">About US</Link>
          <Link href="/">About US</Link>
          <Link href="/">About US</Link>
        </div>
      </div>
      <div className='border border-slate-400'></div>
      <div className='md:flex justify-between mt-5'>
        <div>@ 2024 Seamlesspos</div>
        <div>All Right Reserved</div>
      </div>

    </div>
  );
};

export default Footer;
