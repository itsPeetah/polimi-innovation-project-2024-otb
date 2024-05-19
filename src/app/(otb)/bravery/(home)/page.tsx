import React from "react";
import Header from "./components/Header";
import User from "@/lib/user";
import News from "./components/News";
import Promotions from "./components/Promotions";
import Upcoming from "./components/Upcoming";
import Tasks from "./components/Tasks";

const U: User = {
  name: "User Name",
  level: "dauntless",
  levelPercentage: 0.6,
  profilePicture: "/doesnt-exist.jpg",
  totalPoints: 320,
  email: "user.name@example.com",
};

export default function page() {
  return (
    <main className="w-full">
      <Header user={U} />
      <News user={U} />
      <Promotions user={U} />
      <Tasks user={U} />
      <Upcoming user={U} />
    </main>
  );
}
