"use client";

import User from "@/lib/user";
import React, { useState } from "react";

interface Props {
  user: User;
}

export default function SecondHandMarket({ user }: Props) {
  const [vipStore, setVipStore] = useState(false);

  function buildSecondHandBody() {
    return (
      <div className="w-full h-[600px] p-6 border border-black">
        second hand listings by users
      </div>
    );
  }

  function buildVipBody() {
    return (
      <div className="w-full h-[600px] p-6 border border-black">
        VIP listings by OTB
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
            vipStore ? "bg-zinc-100" : "bg-zinc-300"
          } rounded-l-lg`}
          onClick={() => setVipStore(false)}
        >
          Second hand
        </button>
        <button
          className={`uppercase border-4 border-l-0 border-zinc-300 py-1 ${
            vipStore ? "bg-zinc-300" : "bg-zinc-100"
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
