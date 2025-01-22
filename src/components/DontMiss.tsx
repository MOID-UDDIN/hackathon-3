import React from "react";
import Image from "next/image";
import Link from "next/link";

function DontMiss() {
  return (
    <div className="w-full">
      <div className="w-full md:w-[1344px] h-[977px] mt-[48px] mx-auto max-w-full">
        <p className="font-medium text-[22px] text-[#111111] mb-[20px] text-center">
          Don't Miss
        </p>

        <div className="w-full">
          <Image
            src="/dontmiss/branding.svg"
            alt="branding"
            layout="responsive"
            width={1344}
            height={700}
            className="object-cover"
          />
        </div>

        <div className="w-full h-[177px] mt-[48px] text-center flex flex-col items-center">
          <p className="text-[28px] sm:text-[40px] md:text-[52px] font-medium text-[#111111] w-[512px] sm:w-[90%]">
            FLIGHT ESSENTIALS
          </p>

          <p className="text-[12px] sm:text-[14px] md:text-[15px] text-[#111111] mt-[20px] w-[90%] md:w-[531px]">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>

          <button className="w-[152px] sm:w-[180px] md:w-[200px] h-[39px] rounded-[30px] bg-[#111111] mt-[20px] px-[22.5px] py-[7.5px]">
            <Link href="/products">
              <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-[#FFFFFF]">
                Shop
              </p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DontMiss;
