import React from "react";
import Image from "next/image";

function Essentials() {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1344px] h-auto mt-[48px] mx-auto relative">
        <p className="w-auto mb-[20px] font-medium text-[22px] text-[#111111]">
          The Essentials
        </p>
        <div className="flex flex-wrap sm:flex-nowrap justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
          {/* First Image Section */}
          <div className="w-full sm:w-[440px] md:w-[540px] h-auto relative">
            <Image
              src="/essentials/image1.svg"
              alt="Image 1"
              width={440}
              height={540}
              className="w-full h-auto"
            />
            <button className="absolute bottom-[20px] left-[20px] w-[85.19px] h-[39px] rounded-[30px] py-[7.5px] pr-[20.69px] pl-[21.5px] bg-[#FFFFFF]">
              <p className="text-[15px] font-medium text-[#111111]">Men's</p>
            </button>
          </div>

          {/* Second Image Section */}
          <div className="w-full sm:w-[440px] md:w-[540px] h-auto relative">
            <Image
              src="/essentials/image2.svg"
              alt="Image 2"
              width={440}
              height={540}
              className="w-full h-auto"
            />
            <button className="absolute bottom-[20px] left-[20px] w-[108.89px] h-[39px] rounded-[30px] py-[7.5px] pr-[22.39px] pl-[21.5px] bg-[#FFFFFF]">
              <p className="text-[15px] font-medium text-[#111111]">Women's</p>
            </button>
          </div>

          {/* Third Image Section */}
          <div className="w-full sm:w-[440px] md:w-[540px] h-auto relative">
            <Image
              src="/essentials/image3.svg"
              alt="Image 3"
              width={440}
              height={540}
              className="w-full h-auto"
            />
            <button className="absolute bottom-[20px] left-[20px] w-[77.19px] h-[39px] rounded-[30px] py-[7.5px] pr-[22.69px] pl-[21.5px] bg-[#FFFFFF]">
              <p className="text-[15px] font-medium text-[#111111]">Kids's</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Essentials;
