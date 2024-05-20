"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function TopHeader() {
  const title = useTitle();
  return (
    <div className="sticky top-0 z-50 | w-full | flex-shrink-0">
      <div className="w-full | flex flex-row gap-4 items-center justify-around p-4 | bg-zinc-50 shadow-md">
        <h1 className="lowercase font-bold text-xl">{title}</h1>
      </div>
    </div>
  );
}

function useTitle() {
  const pathname = usePathname();

  switch (pathname) {
    case "/bravery/me":
      return "My Profile";
    case "/bravery/leaderboard":
      return "Hall of Braves";
    case "/bravery/marketplace":
      return "OTB Marketplace";
    case "/bravery/collection":
      return "Collection";
    default:
      return "Welcome home";
  }
}
