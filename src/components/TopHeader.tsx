import React from "react";
import Image from "next/image";
import Link from "next/link";
function TopHeader() {
  return (
    <div className="w-full flex items-center bg-[#F5F5F5] py-2 px-4">
      <Image
        src="/topheader/basketballPlayer.svg"
        alt="Basketball Player logo"
        width={24}
        height={24}
        className="mr-4"
      />

      <div className="flex flex-wrap gap-4 ml-auto">
        <div className="flex items-center gap-2">
          <Link
            href="/products"
             target="_blank"
            className="text-[11px] font-medium text-[#111111]  hover:bg-blue-700 hover:text-white px-2 py-1 rounded"
          >
            Find a Store
          </Link>
          <div className="border-r-2 border-black h-4"></div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/help"
            target="_blank"
            className="text-[11px] font-medium text-[#111111]  hover:bg-blue-700 hover:text-white px-2 py-1 rounded"
          >
            Help
          </Link>
          <div className="border-r-2 border-black h-4"></div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/joinus"
            target="_blank"
            className="text-[11px] font-medium text-[#111111] hover:bg-blue-700 hover:text-white px-2 py-1 rounded"
          >
            Join Us
          </Link>
          <div className="border-r-2 border-black h-4"></div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            target="_blank"
            className="text-[11px] font-medium text-[#111111] hover:bg-blue-700 hover:text-white px-2 py-1 rounded"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
