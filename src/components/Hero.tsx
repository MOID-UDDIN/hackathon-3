import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto">
        <Image
          src="/hero/shoe.svg"
          alt="Shoe image"
          width={1344}
          height={700}
          className="w-full h-auto"
        />

        <div className="mt-12 px-4 md:px-12">
          <p className="text-center text-[15px] font-medium text-[#111111]">
            First Look
          </p>

          <p className="text-center text-[32px] sm:text-[56px] font-medium text-[#111111] mt-4">
            Nike Air Max Pulse
          </p>

          <div className="mt-6">
            <p className="text-center text-[15px] text-[#111111] mx-auto max-w-4xl">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air
              Max Pulse —designed to push you past your limits and help you go
              to the max.
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <button className="w-[110px] h-[39px] rounded-[30px] py-[7.5px] bg-[#111111]">
              <p className="text-center text-[15px] font-medium text-[#FFFFFF]">
                Notify Me
              </p>
            </button>
            <button className="w-[138px] h-[39px] rounded-[30px] py-[7.5px] bg-[#111111]">
              <p className="text-center text-[15px] font-medium text-[#FFFFFF]">
                Shop Air Max
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
