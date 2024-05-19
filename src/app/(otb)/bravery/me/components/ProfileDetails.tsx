import User from "@/lib/user";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

interface Props {
  user: User;
}

export default function ProfileDetails({ user }: Props) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <h3 className="font-bold uppercase text-xs text-zinc-500">
        name
        <PencilSquareIcon className="ml-2 inline w-5 h-5 -translate-y-[0.5px]" />
      </h3>
      <p className="text-sm">{user.name}</p>
      <h3 className="font-bold uppercase text-xs text-zinc-500">
        Email
        <PencilSquareIcon className="ml-2 inline w-5 h-5 -translate-y-[0.5px]" />
      </h3>
      <p className="text-sm">{user.email}</p>
    </div>
  );
}
