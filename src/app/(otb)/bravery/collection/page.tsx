import Product from "@/lib/product";
import React from "react";
import ProductGrid from "./components/ProductGrid";

const P1: Product = {
  name: "Product 1",
  image: "/doesntexist.png",
  description: "",
  passport: {
    id: "",
  },
};

const P2: Product = {
  name: "Product 2",
  image: "/doesntexist.png",
  description: "",
  passport: {
    id: "",
  },
};

const P3: Product = {
  name: "Product 3",
  image: "/doesntexist.png",
  description: "",
  passport: {
    id: "",
  },
};

export default function Page() {
  return (
    <div className="w-full">
      <div className="p-4">
        <h2 className="font-bold uppercase text-sm text-zinc-500">
          Your OTB collection
        </h2>
      </div>
      <ProductGrid products={[P1, P2, P3]} />
    </div>
  );
}
