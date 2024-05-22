"use client";

import {
  mock_product_2,
  mock_product_3,
  mock_product_4,
  mock_product_5,
  mock_product_6,
  mock_product_7,
} from "@/data/products";
import Product from "@/lib/product";
import User from "@/lib/user";
import { useState } from "react";
import ProductGrid from "./ProductGrid";

const productsSecondHand: Product[] = [
  mock_product_2,
  mock_product_6,
  mock_product_4,
];
const productsVIP: Product[] = [mock_product_3, mock_product_5, mock_product_7];
interface Props {
  user: User;
}

export default function SecondHandMarket({ user }: Props) {
  const [vipStore, setVipStore] = useState(false);

  function buildSecondHandBody() {
    return (
      <div className="w-full">
        <ProductGrid products={productsSecondHand} />
      </div>
    );
  }

  function buildVipBody() {
    return (
      <div className="w-full">
        <ProductGrid products={productsVIP} />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="font-bold uppercase text-sm text-zinc-500">
        Community marketplace
      </h2>
      <div className="w-full | grid grid-cols-2 my-4 | text-sm font-bold">
        <button
          className={`uppercase border-4 border-r-0 border-zinc-300 py-1 ${
            vipStore ? "bg-zinc-300" : "bg-zinc-100"
          } rounded-l-lg`}
          onClick={() => setVipStore(false)}
        >
          Second hand
        </button>
        <button
          className={`uppercase border-4 border-l-0 border-zinc-300 py-1 ${
            vipStore ? "bg-zinc-100" : "bg-zinc-300"
          } rounded-r-lg`}
          onClick={() => setVipStore(true)}
        >
          VIP
        </button>
      </div>
      {vipStore ? buildVipBody() : buildSecondHandBody()}
    </div>
  );
}
