import {
  HomeIcon,
  ShoppingBagIcon,
  SwatchIcon,
  TrophyIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0  z-50 | w-full max-w-[450px] | flex-shrink-0">
      <div className="w-full | flex flex-row gap-4 items-center justify-around  p-4 | bg-zinc-50">
        <Link
          href="/braveness/me"
          className="p-2 bg-zinc-200 rounded-xl shadow-lg"
        >
          <UserCircleIcon className="w-8 h-8" />
        </Link>
        <Link
          href="/braveness/collection"
          className="p-2 bg-zinc-200 rounded-xl shadow-lg"
        >
          <SwatchIcon className="w-8 h-8" />
        </Link>
        <Link
          href="/braveness"
          className="p-3 bg-zinc-200 rounded-full shadow-lg"
        >
          <HomeIcon className="w-10 h-10" />
        </Link>
        <Link
          href="/braveness/leaderboard"
          className="p-2 bg-zinc-200 rounded-xl shadow-lg"
        >
          <TrophyIcon className="w-8 h-8" />
        </Link>
        <Link
          href="/braveness/marketplace"
          className="p-2 bg-zinc-200 rounded-xl shadow-lg"
        >
          <ShoppingBagIcon className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
}
