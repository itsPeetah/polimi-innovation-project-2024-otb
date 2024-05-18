import React from "react";
import ProductHeader from "./ProductHeader";
import Product from "@/lib/product";

interface Props {
  product: Product;
}

export default function ProductView({ product }: Props) {
  return (
    <div className="w-full aspect-square bg-zinc-100">
      <div className="w-full h-full flex flex-col items-center justify-center">
        Product View
      </div>
    </div>
  );
}
