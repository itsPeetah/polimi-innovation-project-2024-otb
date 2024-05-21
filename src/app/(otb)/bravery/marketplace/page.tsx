import React from "react";
import Header from "./components/Header";
import FavoriteBrands from "./components/FavoriteBrands";
import { mock_user_0 } from "@/data/users";
import SecondHandMarket from "./components/SecondHand";

export default function Page() {
  return (
    <div className="">
      <Header />
      <FavoriteBrands user={mock_user_0} />
      <SecondHandMarket user={mock_user_0} />
    </div>
  );
}
