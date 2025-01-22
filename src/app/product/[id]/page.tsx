"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";

// Fetch product details from Sanity
async function GetProductData(id: string) {
  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0]{
      _id,
      productName,
      description,
      price,
      "image": image.asset->url,
      category,
      color
    }`,
    { id }
  );
  return product;
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    GetProductData(params.id).then(setProduct);
  }, [params.id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item: any) => item._id === params.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, _id: params.id, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/cart");
  };

  return (
    <div className="mt-24 mx-4 sm:mx-12">
      <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-8">
        {product.image && (
          <img
            src={product.image}
            alt={product.productName}
            className="w-full sm:w-1/2 flex justify-center object-cover"
          />
        )}
        <div className="flex flex-col gap-4 w-full sm:w-1/2">
          <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl w-[367px]">
            {product.productName}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 w-full sm:w-3/4 lg:w-2/3">
            {product.description}
          </p>
          <p className="text-2xl sm:text-3xl font-bold">₹{product.price}</p>
          <button
            onClick={handleAddToCart}
            className="w-full sm:w-48 h-12 rounded-full bg-black text-white flex items-center justify-center gap-2 mt-6"
          >
            <img
              src="/productDetails/cart.png"
              alt="Cart"
              className="w-6 h-6"
            />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
