import { mock_user_0 } from "@/data/users";
import ProfileDetails from "./components/ProfileDetails";
import ProfileLevel from "./components/ProfileLevel";
import ProfilePicture from "./components/ProfilePicture";
import ProfileWallet from "./components/ProfileWallet";
import LearnMore from "./components/LearnMore";
import { ChevronRightIcon, HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <ProfilePicture user={mock_user_0} />
        <ProfileDetails user={mock_user_0} />
      </div>
      {/*  */}
      <div className="py-2 border-b last:border-none flex flex-row items-center gap-4 m-4 bg-zinc-200 p-4 rounded-xl">
        <Link href="/">
          <h3 className="capitalize font-semibold text-base">
            Link your social media profiles
          </h3>
        </Link>
        <ChevronRightIcon
          className="w-6 h-6 flex-shrink-0 mr-0 ml-auto"
          strokeWidth={2}
        />
      </div>
      {/*  */}
      <ProfileLevel user={mock_user_0} />
      <ProfileWallet user={mock_user_0} />
      <LearnMore />
    </div>
  );
}
