import Product from "@/lib/product";
import getShortDescription from "@/lib/product/getShortDescription";
import getImageSrc from "@/lib/utils/getImageSrc";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <div className="py-4 gap-4 grid grid-cols-2">
      {products.map((p) => {
        return <ProductCell product={p} key={`productcell__${p.name}`} />;
      })}
      {/* <div className="flex flex-col items-center justify-center p-4 text-center text-zinc-300 border-2 border-zinc-300 rounded-2xl">
        <PlusCircleIcon strokeWidth={2} className="w-8 h-8" />
        <p>Shop your favorite brands</p>
      </div> */}
    </div>
  );
}

function ProductCell(props: { product: Product }) {
  const isNft = props.product.type === "nft";

  return (
    <div className="shadow-lg rounded-lg">
      <div className="relative w-full aspect-square">
        <Image
          src={getImageSrc(props.product.image)}
          alt={props.product.name}
          width={200}
          height={200}
          className="w-full h-full object-cover bg-black bg-opacity-10 rounded-t-lg"
        />
        {isNft && (
          <div className="absolute bottom-1 right-1 | py-1 px-2 bg-purple-600 text-white text-sm font-bold italic rounded-full shadow-md">
            NFT
          </div>
        )}
      </div>
      <div className="w-full p-2 rounded-b-lg bg-zinc-100">
        <h3 className="font-bold text-xs sm:text-sm">{props.product.name}</h3>
        <p className="text-xs">{props.product.brand.name}</p>
      </div>
    </div>
  );
}
