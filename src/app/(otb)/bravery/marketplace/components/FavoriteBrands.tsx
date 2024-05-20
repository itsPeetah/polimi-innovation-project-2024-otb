import User from "@/lib/user";
import React from "react";

interface Props {
  user: User;
}

export default function FavoriteBrands({ user }: Props) {
  return (
    <div className="px-4 pt-4">
      <h2 className="font-bold uppercase text-sm text-zinc-500">
        Shop your favorite brands
      </h2>
      <div className="p-6 w-full border border-black">
        links to brand websites
      </div>
    </div>
  );
}
