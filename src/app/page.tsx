"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import WhyShopWithUs from "./components/WhyShopWithUs";
import ProductSection from "./components/ProductSection";
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  const showStatus=8
  return (
    <>
      <div>
        <Navbar />
        <ToastContainer />
        <div className=" h-[50px] lg:h-[100px]"></div>
        <Banner />
        <ProductSection showStatus={Number(showStatus)} />
        <WhyShopWithUs />

      </div>
    </>
  );
}
