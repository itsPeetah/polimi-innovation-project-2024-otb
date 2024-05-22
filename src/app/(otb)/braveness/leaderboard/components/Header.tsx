import getLevelColor from "@/lib/level/getLevelColor";
import User from "@/lib/user";
import React from "react";

interface Props {
  user: User;
}

export default function Header({ user }: Props) {
  const bgColor = getLevelColor(user.level, "bg");
  const txtColor = getLevelColor(user.level, "text");

  return (
    <>
      <div className="p-4 text-center">
        <h3 className="uppercase text-xs font-bold text-zinc-500">
          Compete in the
        </h3>
        <h1 className="uppercase text-xl font-semibold py-2 px-8">
          <span className={`${bgColor} ${txtColor} p-2 rounded-full shadow-lg`}>
            {user.level} league
          </span>
        </h1>
        <p className="mx-4 mt-4 text-balance">
          Gain points in tasks such as participating in events, engaging with
          the community and sharing your style!
        </p>
      </div>
    </>
  );
}
