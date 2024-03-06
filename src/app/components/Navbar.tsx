import Image from 'next/image';
import Link from 'next/link';
import React, { useState,useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean|any>(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartValue,setCartDetails]=useState(0)
  const [navbarBg,setNavbarBg]=useState(false)

  // const navColorChang=()=>{
  //   if (window.scrollY>=80) {
  //     setNavbarBg(true)
  //   }else{
  //     setNavbarBg(false)
  //   }
  // }
  // window.addEventListener("scroll",navColorChang)

  const navColorChange = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= 80) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", navColorChange);
    return () => {
      window.removeEventListener("scroll", navColorChange);
    };
  }, []);
  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Retrieve cart details from local storage
    const storedCart = localStorage.getItem("cartDetails");
    if (storedCart) {
        const cartArray = JSON.parse(storedCart);
        setCartDetails(cartArray.length);
       
    } else {
        setCartDetails(0)
    }
}, [cartValue]);

  const lgNavDetails=[
    {
      id:1,
      title:"Home",
      path:"/"
    },
    {
      id:2,
      title:"Products",
      path:"/products"
    },{
      id:3,
      title:"About",
      path:"/about"
    },{
      id:4,
      title:"Contact",
      path:"/contact"
    }
  ]

  return (
    <nav className={`shadow-lg py-4 md:px-20 fixed top-0 w-full z-50  ${navbarBg?"bg-slate-200":"backdrop-filter backdrop-blur-lg"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src={require("../assets/logo.png")} alt='' width={220} height={60} />
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-[#1941e1] hover:text-[#19d7b4]">Home</Link>
          <Link href="/products" className="text-[#1941e1] hover:text-[#19d7b4]">Products</Link>
          <Link href="/about" className="text-[#1941e1] hover:text-[#19d7b4]">About</Link>
          <Link href="/contact" className="text-[#1941e1] hover:text-[#19d7b4]">Contact</Link>
        </div>
        <div className="relative">
          <sup className="text-[#1941e1] bg-white font-bold p-2 rounded-full absolute -top-2 -right-2">{cartValue}</sup>
          <Link href="/cart"><FaShoppingCart size={24} className="text-red-700 cursor-pointer" /></Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-[#1941e1] focus:outline-none focus:text-gray-300"
          >
            {isOpen ? (
              <IoClose size={40} />
            ) : (
              <HiMenuAlt3 size={40} />
            )}
          </button>
        </div>
        
      </div>
      {isOpen && (
        <div className="absolute  top-16 left-0 w-full  md:hidden flex justify-end">
          <div className="px-2 py-4 space-y-10 shadow backdrop-filter backdrop-blur-lg bg-slate-100 w-4/6 text-center rounded-t-lg ">
            <Link href="/" className="block hover:text-[#19d7b4]" onClick={closeNavbar}>Home</Link>
            <Link href="/products" className="block  hover:text-[#19d7b4]" onClick={closeNavbar}>Products</Link>
            <Link href="/about" className="block  hover:text-[#19d7b4]" onClick={closeNavbar}>About</Link>
            <Link href="/contact" className="block  hover:text-[#19d7b4]" onClick={closeNavbar}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
