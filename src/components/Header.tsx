"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const totalItems = cart.reduce(
      (acc: number, item: any) => acc + item.quantity,
      0
    );
    setCartCount(totalItems);
  };

  useEffect(() => {
    updateCartCount();

    const handleStorageChange = () => {
      updateCartCount();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      router.push(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="w-full flex items-center bg-[#FFFFFF] py-2 px-4">
      <Image
        src="/header/nikeSymbol.svg"
        alt="Nike"
        width={58.85}
        height={20.54}
        className="mr-4"
      />

      <div className="flex-1">
        <ul className="flex justify-center items-center text-black text-[15px] gap-4 flex-wrap">
          <li className="hover:underline cursor-pointer">
            <Link href="/products">News & Featured</Link>
          </li>
          <li className="hover:underline cursor-pointer">Men</li>
          <li className="hover:underline cursor-pointer">Women</li>
          <li className="hover:underline cursor-pointer">Kids</li>
          <li className="hover:underline cursor-pointer">Sale</li>
          <li className="hover:underline cursor-pointer">SNKRS</li>
        </ul>
      </div>

      <form
        onSubmit={handleSearchSubmit}
        className="hidden md:flex items-center bg-[#F5F5F5] rounded-full px-4 py-2"
      >
        <div className="flex items-center justify-center w-6 h-6">
          <Image
            src="/header/search.svg"
            alt="Search Icon"
            width={16.72}
            height={16.72}
          />
        </div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="ml-2 text-[15px] text-[#CCCCCC] bg-transparent outline-none"
        />
      </form>

      <div className="flex items-center gap-4 ml-4 relative">
        <Image
          src="/header/heart.svg"
          alt="Heart Icon"
          width={24}
          height={24}
        />
        <div className="relative">
          <Image src="/header/bag.svg" alt="Bag Icon" width={24} height={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
