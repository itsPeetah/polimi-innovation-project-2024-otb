import Brand from "@/lib/brand";
import getImageSrc from "@/lib/utils/getImageSrc";
import Image from "next/image";
import React from "react";

interface Props {
  brand: Brand;
}

export default function Header({ brand }: Props) {
  return (
    <div className="sticky top-0 | w-full h-16 | bg-black">
      <span className="w-full h-full flex flex-row gap-4 items-center justify-center">
        <Image
          src={getImageSrc(brand.logo)}
          alt={brand.name}
          width={40}
          height={40}
          className="w-12 h-12 rounded-full object-cover"
        />
        <h1 className="text-white text-xl">{brand.name}</h1>
      </span>
    </div>
  );
}
