"use client"

import Image from 'next/image';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import ProductSpec from '@/app/components/ProductSpec';
import Navbar from '@/app/components/Navbar';
import { notFound, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ProductSlider from '@/app/components/products/ProductSlider';
import DeliveryDetails from '@/app/components/products/productDetails/DeliveryDetails';
import { ProductInterface } from '@/app/interfaces';
interface Param {
  params: {
      productId: string;
  };
  searchParams: {
      product_name: string;
  };
}
function ProductPage(param:Param) {
  const [product, setProducts] = useState<ProductInterface>();
  const [quantity, setQuantity] = useState<number>(1); 
  const [newPrice,setNewPrice]=useState<any>()
  console.log(param)
  let productId = param.params.productId
  let product_name = param.searchParams.product_name
  console.log(productId, product_name)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/products/${productId}?product_name=${product_name}`); 
        const data = await response.json();
        setProducts(data);
        setNewPrice(data?.price)
        console.log(data, "hey hey")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setNewPrice((prevQuantity:any) => prevQuantity + parseInt(newPrice))
    localStorage.setItem("quantity", quantity.toString());
    localStorage.setItem("newPrice",newPrice.toString())
};


const decrementQuantity = () => {
    if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
        setNewPrice((prevQuantity:any) => prevQuantity - parseInt(newPrice))
        localStorage.setItem("quantity", quantity.toString());
        localStorage.setItem("newPrice",newPrice.toString())
    }
};

useEffect(() => {
  const savedQuantity = localStorage.getItem('quantity');
  const savedPrice= localStorage.getItem('newPrice');
  if (savedQuantity) {
      setQuantity(Number(savedQuantity));
      setNewPrice(Number(savedPrice))
  }
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
              <p className="text-lg mb-5">Price: {quantity==1?product?.price:<del>{product?.price}</del>}  {quantity !== 1 ? `--- ${newPrice }` : ""}</p>
              <div className="flex items-center mb-5">
                <span className="mr-3">Quantity:</span>
                <div className="border border-gray-300 rounded-md flex items-center px-3">
                <button className="focus:outline-none" onClick={decrementQuantity}>-</button>
                <span className="mx-2">{quantity}</span>
                <button className="focus:outline-none" onClick={incrementQuantity}>+</button>
            </div>
              </div>
              <button className='bg-[#19d7b4] text-white py-2 px-10 font-bold rounded-lg mb-5 hover:bg-[#1941e1]'>Buy Now</button>
              <div className='border border-gray-200'></div>
              <div className='my-5'>
                <h3 className="text-lg mb-3">Share with friends</h3>
                <div className='flex gap-5'>
                  <FaFacebook className='border rounded-full' />
                  <FaTwitter className='border rounded-full'/>
                  <FaWhatsapp className='border rounded-full'/>
                </div>
              </div>
            </div>
          </div>
          
          <DeliveryDetails/>
        </section>
        <ProductSpec product={product}/>
      </div>
    </div>
  );
}

export default ProductPage;
