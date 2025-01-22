import React from "react";
import Image from "next/image";

interface CardDetails {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
}

const BestOfAirMax = () => {
  const cards: CardDetails[] = [
    {
      imageSrc: "/bestofairmax/shoe1.svg",
      title: "Nike Air Max Pulse",
      description: "Women's Shoes",
      price: "₹ 13 995",
    },
    {
      imageSrc: "/bestofairmax/shoe1.svg",
      title: "Nike Air Max Pulse",
      description: "Men's Shoes",
      price: "₹ 13 995",
    },
    {
      imageSrc: "/bestofairmax/shoe2.svg",
      title: "Nike Air Max Pulse",
      description: "Men's Shoes",
      price: "₹ 16 995",
    },
    {
      imageSrc: "/bestofairmax/shoe1.svg",
      title: "Nike Air Max Pulse",
      description: "Women's Shoes",
      price: "₹ 13 995",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 mt-12">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <p className="text-[22px] font-medium text-[#111111]">
          Best of Air Max
        </p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <p className="text-[15px] font-medium text-[#111111]">Shop</p>
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

      {/* Cards Section */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={card.imageSrc}
              alt={card.title}
              width={441.36}
              height={441.36}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="text-[15px] font-medium text-[#111111]">
                  {card.title}
                </p>
                <p className="text-[15px] text-[#757575]">{card.description}</p>
              </div>
              <p className="text-[15px] font-medium text-[#111111]">
                {card.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestOfAirMax;
