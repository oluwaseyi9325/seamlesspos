"use client"

import Image from 'next/image';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import ProductSpec from '@/app/components/ProductSpec';
import Navbar from '@/app/components/Navbar';
import { notFound, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ProductSlider from '@/app/components/products/ProductSlider';

function ProductPage(param: any,) {
  const [product, setProducts] = useState<any>({});
  console.log(param)
  let productId = param.params.productId
  let product_name = param.searchParams.product_name
  console.log(productId, product_name)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/products/${productId}?product_name=${product_name}`); // Assuming the data.json file is in the public/data directory
        const data = await response.json();
        setProducts(data);
        console.log(data, "hey hey")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // if(!product.ok){
  //    notFound()
  // }
  return (
    <div>
      <Navbar />
      <div className=" h-[50px] lg:h-[50px]"></div>
      <div className='px-3 md:px-[100px]'>
        <section className='md:flex justify-between gap-10 my-10'>
          <div className='bg-white rounded-lg p-5 md:px-10 md:pt-10 shadow md:flex justify-between gap-10 mt-5 md:w-[2000px]'>
            <ProductSlider product={product}/>
            <div className="md:w-1/2">
              <h1 className='text-3xl font-bold my-5'>{product?.name}</h1>
              <p className="text-lg mb-5">Price: {product?.price}</p>
              <div className="flex items-center mb-5">
                <span className="mr-3">Quantity:</span>
                <div className="border border-gray-300 rounded-md flex items-center px-3">
                  <button className="focus:outline-none">-</button>
                  <span className="mx-2">1</span>
                  <button className="focus:outline-none">+</button>
                </div>
              </div>
              <button className='bg-[#19d7b4] text-white py-2 px-10 font-bold rounded-lg mb-5 hover:bg-[#1941e1]'>Buy Now</button>
              <div className='border border-gray-200'></div>
              <div className='my-5'>
                <h3 className="text-lg mb-3">Share with friends</h3>
                <div className='flex gap-5'>
                  <FaFacebook />
                  <FaTwitter />
                  <FaWhatsapp />
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-lg p-5 border shadow md:w-5/6 mt-5'>
            <h2 className="text-2xl font-bold mb-5">Delivery & Returns</h2>
            <div>
              <h3 className="text-lg font-semibold">Delivery</h3>
              <p className="text-gray-600 mb-3">Estimated delivery time: 1-9 business days</p>
              <p className="text-gray-600 mb-3">Express Delivery Available:</p>
              <ul className="list-disc pl-5">
                <li>Same day delivery: Order before 11AM and get it today</li>
                <li>Next day delivery: Order after 11AM and get it tomorrow</li>
                <li>Note: Subject to availability in your location</li>
              </ul>
            </div>
          </div>
        </section>
        <ProductSpec product={product}/>
      </div>
    </div>
  );
}

export default ProductPage;
