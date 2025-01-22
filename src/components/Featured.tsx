import React from "react";
import Image from "next/image";
import Link from "next/link";

function Featured() {
  return (
    <div className="w-full">
      <div className="w-full h-auto mt-[48px] px-[2rem]">
        <p className="mb-[20px] font-medium text-[23px] text-[#111111]">
          Featured
        </p>
        <Image
          src="/featured/running.svg"
          alt="Running"
          width={1344}
          height={700}
          className="w-full h-auto"
        />
        <div className="w-full max-w-[1008px] h-auto mt-[48px] mx-auto">
          <p className="text-center text-[54px] font-medium text-[#111111]">
            STEP INTO WHAT FEELS GOOD
          </p>
          <p className="text-center mt-[20px] text-[15px] text-[#111111]">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <Link href="/products">
            <button className="w-[152.42px] h-[39px] rounded-[30px] py-[7.5px] pr-[23.92px] pl-[22.5px] bg-[#111111] mx-auto mt-[20px] block">
              <p className="text-[15px] font-medium text-[#FFFFFF]">
                Find Your Shoe
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Featured;
