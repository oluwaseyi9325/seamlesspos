"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import WhyShopWithUs from "./components/WhyShopWithUs";
import ProductSection from "./components/ProductSection";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className=" h-[50px] lg:h-[100px]"></div>
        <Banner />
        <ProductSection />
        <WhyShopWithUs />

      </div>
    </>
  );
}
