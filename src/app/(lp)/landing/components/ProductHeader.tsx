"use client";

import Product from "@/lib/product";
import getShortDescription from "@/lib/product/getShortDescription";
import { useState } from "react";

interface Props {
  product: Product;
}

export default function ProductHeader({ product }: Props) {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="flex flex-col gap-2 p-[10px] | shadow-lg ring-offset-0">
      <h1 className="text-xl font-semibold">{product.name}</h1>
      <p className="text-black text-opacity-80 text-sm">
        {showFullText ? product.description : getShortDescription(product, 100)}
        &nbsp;
      </p>
      <button
        onClick={() => setShowFullText(!showFullText)}
        className="w-full text-center text-xs"
      >
        &#40;{showFullText ? "show less" : "show more"}&#41;
      </button>
    </div>
  );
}
