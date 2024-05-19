import LevelBadge from "@/app/components/common/LevelBadge";
import User from "@/lib/user";
import Link from "next/link";
import React from "react";

interface Props {
  user: User;
}

export default function ProfileLevel({ user }: Props) {
  return (
    <div className="p-4">
      <h2 className="font-bold uppercase text-sm text-zinc-500">
        Your bravery history
      </h2>
      {[5, 10, 2].map((v, i) => {
        return (
          <div key={`history${i}`} className="bg-zinc-100 my-2 p-1 text-xs">
            <h4 className="uppercase font-semibold w-full">
              Point gaining action{" "}
              <span className="font-light inline-block">dd/mm/yyyy</span>
            </h4>
            <p className="uppercase">
              gained <i>{v} points</i>
            </p>
          </div>
        );
      })}
      <Link
        href=""
        className="block ml-auto mr-0 text-right text-xs text-zinc-500"
      >
        See full point history &gt;
      </Link>
    </div>
  );
}
