"use client";

import User from "@/lib/user";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  user: User;
}

export default function ProfileWallet({ user }: Props) {
  const [walletLinked, setWalletLinked] = useState(false);

  return (
    <div className="p-4">
      <h2 className="font-bold uppercase text-sm text-zinc-500 mb-4">
        Your <i>AURA</i> wallet
      </h2>
      <Link
        onClick={(e) => {
          if (walletLinked) return;
          e.preventDefault();
          setWalletLinked(() => true);
        }}
        href="/lol"
        className="block w-full bg-black p-4 rounded-xl text-white text-center text-xl uppercase font-bold"
      >
        {walletLinked ? "View wallet" : "Link wallet"}
      </Link>
    </div>
  );
}
