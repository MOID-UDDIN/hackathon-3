import React from "react";

const Categories = () => {
  return (
    <div className="w-full px-4">
      <div className="w-full max-w-[880px] h-auto mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <h2 className="text-[12px] sm:text-[14px] md:text-[15px] font-normal mb-4 text-[#111111]">
              Icons
            </h2>
            <ul className="w-full h-auto text-[12px] sm:text-[14px] md:text-[15px] text-[#757575]">
              <li className="mb-2">Air Force 1</li>
              <li className="mb-2">Huarache</li>
              <li className="mb-2">Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[12px] sm:text-[14px] md:text-[15px] font-normal mb-4 text-[#111111]">
              Shoes
            </h2>
            <ul className="w-full h-auto text-[12px] sm:text-[14px] md:text-[15px] text-[#757575]">
              <li className="mb-2">All Shoes</li>
              <li className="mb-2">Custom Shoes</li>
              <li className="mb-2">Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[12px] sm:text-[14px] md:text-[15px] font-normal mb-4 text-[#111111]">
              Clothing
            </h2>
            <ul className="w-full h-auto text-[12px] sm:text-[14px] md:text-[15px] text-[#757575]">
              <li className="mb-2">All Clothing</li>
              <li className="mb-2">Modest Wear</li>
              <li className="mb-2">Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[12px] sm:text-[14px] md:text-[15px] font-normal mb-4 text-[#111111]">
              Kids'
            </h2>
            <ul className="w-full h-auto text-[12px] sm:text-[14px] md:text-[15px] text-[#757575]">
              <li className="mb-2">Infant & Toddler Shoes</li>
              <li className="mb-2">Kids' Shoes</li>
              <li className="mb-2">Kids' Jordan Shoes</li>
              <li>Kids' Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
