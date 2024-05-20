import React from "react";
import Tasks from "../(home)/components/Tasks";
import { mock_user_0, mock_users_leaderboard } from "@/data/users";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import getLevelColor from "@/lib/level/getLevelColor";

export default function Page() {
  const bgColor = getLevelColor(mock_user_0.level, "bg");

  return (
    <div className="w-full | flex flex-col">
      <div className={`w-full h-2 shadow-xl ${bgColor}`} />
      <Header user={mock_user_0} />
      <Tasks title="Your tasks" user={mock_user_0} />
      <Leaderboard user={mock_user_0} otherUsers={mock_users_leaderboard} />
      <div className={`w-full h-2 shadow-xl ${bgColor}`} />
    </div>
  );
}
