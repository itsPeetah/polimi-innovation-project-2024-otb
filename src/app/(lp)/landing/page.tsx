import React from "react";
import ProductView from "./components/ProductView";
import Product from "@/lib/product";
import ProductPassport from "./components/ProductPassport";
import TokenClaimButton from "./components/TokenClaimButton";
import ProductHeader from "./components/ProductHeader";
import ProductTokenInfo from "./components/ProductTokenInfo";
import User from "@/lib/user";

const P: Product = {
  name: "Product Name",
  image: "/non-existent.png",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis nisl et metus facilisis, a gravida lacus ornare. Curabitur non nunc at purus malesuada imperdiet eu ut mauris. Cras et libero eu nisl malesuada dictum et vel justo. Ut at massa quis leo dignissim dictum. Sed vehicula maximus lacus et maximus.",
  passport: {
    id: "eaedb5c9b418bd6eff0894d572f3011a",
  },
};

const U: User = {
  name: "",
  level: "dauntless",
  levelPercentage: 0,
  profilePicture: "",
  totalPoints: 0,
  email: "",
};

export default function Page() {
  return (
    <>
      <main className="w-full pb-20">
        <ProductView product={P} />
        <ProductHeader product={P} />
        <ProductTokenInfo product={P} user={U} />
        <ProductPassport product={P} />
      </main>
      <TokenClaimButton />
    </>
  );
}
