import LevelBadge from "@/app/components/common/LevelBadge";
import LevelGauge from "@/app/components/common/LevelGauge";
import User from "@/lib/user";
import Image from "next/image";
import React from "react";

interface Props {
  user: User;
}

export default function Header({ user }: Props) {
  return (
    <>
      <div className="w-full flex flex-row items-center justify-center p-4 gap-4">
        <Image
          src={user.profilePicture}
          alt={user.name + "'s profile picture"}
          width={120}
          height={120}
          className="bg-zinc-100 rounded-full shadow-lg"
        ></Image>
        <div className="h-full | flex flex-col justify-between gap-2">
          <h1 className="font-bold text-xl">{user.name}</h1>
          <LevelBadge level={user.level} />
          <div className="flex flex-row gap-4 uppercase text-xs font-bold">
            <span className="w-24 opacity-70 shadow-lg">
              <LevelGauge
                level={user.level}
                percentage={user.levelPercentage}
              />
            </span>
            <span>{user.totalPoints}pts.</span>
          </div>
        </div>
      </div>
    </>
  );
}
