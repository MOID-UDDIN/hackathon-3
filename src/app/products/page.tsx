"use client";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useState, useEffect } from "react";

async function GetData(
  searchTerm: string | null = null,
  gender: string | null = null,
  priceRange: string | null = null,
  color: string | null = null
) {
  let query = `*[_type == "product" ${searchTerm ? `&& productName match "${searchTerm}*"` : ""} 
     ${
       gender
         ? `&& category in [
        ${
          gender === "Men"
            ? '"Men\'s Shoes","Men\'s Shoes","Men\'s Shoes","Men\'s Shoes","Men\'s Shoes","Men\'s Shoes","Men\'s Shoes", "Men\'s Short-Sleeve Graphic Fitness Top", "Men\'s Running Shoes","Men\'s Running Shoes","Men\'s Running Shoes", "Men\'s Training Shoes"'
            : gender === "Women"
              ? '"Women\'s Basketball Jersey", "Women\'s Shoes","Women\'s Shoes","Women\'s Shoes",'
              : '"Men\'s Shoes", "Men\'s Short-Sleeve Graphic Fitness Top", "Men\'s Running Shoes", "Men\'s Training Shoes", "Women\'s Basketball Jersey", "Women\'s Shoes"'
        }]`
         : ""
     } ${priceRange ? `&& price >= ${priceRange.split("-")[0]} && price <= ${priceRange.split("-")[1]}` : ""} ${color ? `&& colors match "${color}"` : ""}]{
    _id,
    productName,
    description,
    price,
    "image": image.asset->url,
    category,
    inventory,
    colors,
    status
  }`;

  return await client.fetch(query);
}

export default function Products({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [priceRangeFilter, setPriceRangeFilter] = useState<string | null>(null);
  const [colorFilter, setColorFilter] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [genderDropdownOpen, setGenderDropdownOpen] = useState(false);
  const [priceRangeDropdownOpen, setPriceRangeDropdownOpen] = useState(false);
  const [colorDropdownOpen, setColorDropdownOpen] = useState(false);

  const searchTerm = searchParams?.search || null;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const products = await GetData(
        searchTerm,
        genderFilter,
        priceRangeFilter,
        colorFilter
      );
      setData(products);
      setLoading(false);
    };

    fetchData();
  }, [searchTerm, genderFilter, priceRangeFilter, colorFilter]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-white text-black p-4 text-sm">
          <h2 className="text-lg font-bold mb-4">New (500)</h2>

          {/* Gender Dropdown */}
          <div className="mb-4">
            <button
              className="w-full text-left py-2 border-b font-bold flex items-center justify-between text-sm"
              onClick={() => setGenderDropdownOpen(!genderDropdownOpen)}
            >
              Gender
              <span className="ml-2 text-base">
                {genderDropdownOpen ? "▲" : "▼"}
              </span>
            </button>
            {genderDropdownOpen && (
              <div className="mt-2">
                <label className="block">
                  <input
                    type="radio"
                    name="gender"
                    onChange={() => setGenderFilter("Men")}
                    checked={genderFilter === "Men"}
                  />{" "}
                  Men
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="gender"
                    onChange={() => setGenderFilter("Women")}
                    checked={genderFilter === "Women"}
                  />{" "}
                  Women
                </label>
                <label className="block">
                  <input
                    type="radio"
                    name="gender"
                    onChange={() => setGenderFilter("Both")}
                    checked={genderFilter === "Both"}
                  />{" "}
                  Both Men and Women
                </label>
              </div>
            )}
          </div>

          {/* Price Range Dropdown */}
          <div className="mb-4">
            <button
              className="w-full text-left py-2 border-b font-bold flex items-center justify-between text-sm"
              onClick={() => setPriceRangeDropdownOpen(!priceRangeDropdownOpen)}
            >
              Shot By Price
              <span className="ml-2 text-base">
                {priceRangeDropdownOpen ? "▲" : "▼"}
              </span>
            </button>
            {priceRangeDropdownOpen && (
              <div className="mt-2">
                <button
                  className="block w-full text-left py-2 text-sm hover:underline"
                  onClick={() => setPriceRangeFilter("0-2500")}
                >
                  Under ₹2500
                </button>
                <button
                  className="block w-full text-left py-2 text-sm hover:underline"
                  onClick={() => setPriceRangeFilter("2500-7500")}
                >
                  ₹2500-₹7500
                </button>
                <button
                  className="block w-full text-left py-2 text-sm hover:underline"
                  onClick={() => setPriceRangeFilter("7500-999999")}
                >
                  Above ₹7500
                </button>
              </div>
            )}
          </div>

          {/* Color Dropdown */}
          <div className="mb-4">
            <button
              className="w-full text-left py-2 border-b font-bold flex items-center justify-between text-sm"
              onClick={() => setColorDropdownOpen(!colorDropdownOpen)}
            >
              Colors
              <span className="ml-2 text-base">
                {colorDropdownOpen ? "▲" : "▼"}
              </span>
            </button>
            {colorDropdownOpen && (
              <div className="mt-2">
                {[
                  "White",
                  "Black",
                  "Beige",
                  "Teal",
                  "Gray",
                  "Blue",
                  "Pink",
                ].map((color) => (
                  <label className="block" key={color}>
                    <input
                      type="radio"
                      name="color"
                      onChange={() => setColorFilter(color)}
                      checked={colorFilter === color}
                    />{" "}
                    {color}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((product: any) => (
            <Link href={`/product/${product._id}`} key={product._id}>
              <div className="bg-white shadow-md rounded-lg p-4 transition-shadow hover:bg-blue-100">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                )}
                <p className="text-sm text-[#9E3500]">{product.status}</p>
                <h2 className="text-lg font-semibold mt-2">
                  {product.productName}
                </h2>
                <p className="text-gray-600">{product.category}</p>
                <p className="text-gray-600">
                  Colors: {product.colors.join(", ")}
                </p>
                <p className="font-bold">MRP : ₹{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
