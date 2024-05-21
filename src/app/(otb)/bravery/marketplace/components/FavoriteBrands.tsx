import { amiri, diesel, margiela, marni } from "@/data/brands";
import Brand from "@/lib/brand";
import User from "@/lib/user";
import getImageSrc from "@/lib/utils/getImageSrc";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const brands = [amiri, diesel, margiela, marni];

interface Props {
  user: User;
}

export default function FavoriteBrands({ user }: Props) {
  return (
    <div className="px-4 pt-4">
      <h2 className="font-bold uppercase text-sm text-zinc-500">
        Shop your favorite brands
      </h2>
      <div className="w-full | flex flex-row justify-around items-center gap-4 my-4">
        {brands.map((b) => (
          <BrandLink key={"fav_b_" + b.name} brand={b} />
        ))}
        {/* <BrandLink
          brand={{
            name: "Other brands",
            url: "",
            logo: "/images/brand/more.png",
          }}
        /> */}
        <p className="max-w-[60px] text-balance text-center text-sm text-zinc-400">
          see all brands
        </p>
      </div>
    </div>
  );
}

export function BrandLink(props: { brand: Brand }) {
  return (
    <Link href={props.brand.url}>
      <Image
        src={getImageSrc(props.brand.logo)}
        alt={props.brand.name}
        width={60}
        height={60}
        className="w-[60px] h-[60px] rounded-full shadow-lg border"
      />
    </Link>
  );
}
