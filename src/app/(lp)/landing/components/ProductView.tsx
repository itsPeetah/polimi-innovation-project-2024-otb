import React from "react";
import ProductHeader from "./ProductHeader";
import Product from "@/lib/product";
import Image from "next/image";
import getImageSrc from "@/lib/utils/getImageSrc";

interface Props {
  product: Product;
}

export default function ProductView({ product }: Props) {
  return (
    <div className="w-full aspect-square bg-zinc-100">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Image
          src={getImageSrc(product.image)}
          alt={product.name}
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
