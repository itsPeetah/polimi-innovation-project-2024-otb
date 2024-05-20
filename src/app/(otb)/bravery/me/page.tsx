import { mock_user_0 } from "@/data/users";
import ProfileDetails from "./components/ProfileDetails";
import ProfileLevel from "./components/ProfileLevel";
import ProfilePicture from "./components/ProfilePicture";
import ProfileWallet from "./components/ProfileWallet";
import LearnMore from "./components/LearnMore";

export default function Page() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <ProfilePicture user={mock_user_0} />
        <ProfileDetails user={mock_user_0} />
      </div>
      <ProfileLevel user={mock_user_0} />
      <ProfileWallet user={mock_user_0} />
      <LearnMore />
    </div>
  );
}
