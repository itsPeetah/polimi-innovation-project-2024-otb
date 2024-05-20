import User from "@/lib/user";
import Image from "next/image";
import React from "react";

interface Props {
  user: User;
  otherUsers: User[];
}

export default function Leaderboard({ user, otherUsers }: Props) {
  const leaderboardUsers = [user, ...otherUsers].sort(
    (a, b) => b.totalPoints - a.totalPoints
  );

  return (
    <div className="w-full p-4">
      <h2 className="font-bold uppercase text-sm text-zinc-500">
        The community
      </h2>
      <div className="flex flex-col gap-4 py-4">
        {leaderboardUsers.map((u) => {
          return (
            <LeaderboardRow
              key={`lb_user_` + u.name}
              user={u}
              isActiveUser={u.name === user.name}
            />
          );
        })}
      </div>
    </div>
  );
}

function LeaderboardRow({
  user,
  ...props
}: {
  user: User;
  isActiveUser: boolean;
}) {
  return (
    <div
      className={`w-full | flex flex-row px-4 py-2 items-center gap-4 | rounded-lg bg-zinc-200`}
    >
      <Image
        src={user.profilePicture}
        alt={user.name}
        width={50}
        height={50}
        className="w-16 h-16 flex-shrink-0 bg-zinc-300 shadow-md rounded-full"
      />
      <div className="relative flex-grow">
        <p className="text-lg font-semibold">
          {props.isActiveUser ? "You" : user.name}
        </p>
        <p className="uppercase text-sm">{user.totalPoints} pts.</p>
        {!props.isActiveUser && (
          <p className="absolute right-0 bottom-0 text-xs text-zinc-500 font-light">
            &#40;view their collection&#41;
          </p>
        )}
      </div>
    </div>
  );
}
