import User from "@/lib/user";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

interface Props {
  user: User;
}

export default function ProfilePicture({ user }: Props) {
  return (
    <div className="w-full p-4">
      <div className="relative mx-auto w-[120px] h-[120px]">
        <Image
          src={user.profilePicture}
          alt={user.name + "'s profile picture"}
          width={120}
          height={120}
          className="bg-zinc-100 w-full h-full rounded-full shadow-lg"
        ></Image>
        <div className="absolute top-0 w-full h-full | flex flex-col items-center justify-center | bg-black bg-opacity-20 text-white rounded-full">
          <button className="text-xs">
            <PencilSquareIcon className="mx-auto w-8 h-8" strokeWidth={1.5} />
            Edit profile picture
          </button>
        </div>
      </div>
    </div>
  );
}
