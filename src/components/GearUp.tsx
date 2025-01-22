import React from "react";
import Image from "next/image";

const products = [
  {
    category: "Shop Men's",
    items: [
      {
        image: "/gearup/image1.svg",
        title: "Nike Dri-FIT ADV TechKnit Ultra",
        description: ["Men's Short-Sleeve", "Running Top"],
        price: "₹ 3 895",
      },
      {
        image: "/gearup/image2.svg",
        title: "Nike Dri-FIT Challenger",
        description: ["Men's 18cm (approx.) 2-", "in-1 Versatile Shorts"],
        price: "₹ 2 495",
      },
    ],
  },
  {
    category: "Shop Women's",
    items: [
      {
        image: "/gearup/image3.svg",
        title: "Nike Dri-FIT ADV Run Division",
        description: ["Women's Long-Sleeve", "Running Top"],
        price: "₹ 5 295",
      },
      {
        image: "/gearup/image4.svg",
        title: "Nike Fast",
        description: ["Women's Mid-Rise 7/8 Running", "Leggings with Pockets"],
        price: "₹ 3 795",
      },
    ],
  },
];

function GearUp() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-12">
        <p className="text-lg font-medium text-[#111111] mb-6">Gear Up</p>
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {products.map((category, index) => (
            <div key={index} className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-[#111111]">
                  {category.category}
                </p>
                <div className="flex space-x-2">
                  <Image
                    src="/bestofairmax/leftArrow.svg"
                    alt="Left Arrow"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/bestofairmax/rightArrow.svg"
                    alt="Right Arrow"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {category.items.map((item, i) => (
                  <div key={i} className=" p-4 shadow-sm bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="w-full h-auto"
                    />
                    <div className="mt-4">
                      <p className="text-sm font-medium text-[#111111] mb-1">
                        {item.title}
                      </p>
                      {item.description.map((line, idx) => (
                        <p key={idx} className="text-sm text-[#757575]">
                          {line}
                        </p>
                      ))}
                      <p className="text-sm font-medium text-[#111111] mt-2">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GearUp;
