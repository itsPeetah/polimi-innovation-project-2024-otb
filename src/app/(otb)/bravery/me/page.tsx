import User from "@/lib/user";
import React from "react";
import ProfilePicture from "./components/ProfilePicture";
import ProfileDetails from "./components/ProfileDetails";
import ProfileLevel from "./components/ProfileLevel";
import ProfileWallet from "./components/ProfileWallet";

const U: User = {
  name: "User Name",
  level: "dauntless",
  levelPercentage: 0.6,
  profilePicture: "/doesnt-exist.jpg",
  totalPoints: 320,
  email: "user.name@example.com",
};

export default function Page() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <ProfilePicture user={U} />
        <ProfileDetails user={U} />
      </div>
      <ProfileLevel user={U} />
      <ProfileWallet user={U} />
    </div>
  );
}
