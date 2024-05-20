import { mock_user_0 } from "@/app/data/users";
import Header from "./components/Header";
import News from "./components/News";
import Promotions from "./components/Promotions";
import Tasks from "./components/Tasks";
import Upcoming from "./components/Upcoming";

export default function page() {
  return (
    <main className="w-full">
      <Header user={mock_user_0} />
      <News user={mock_user_0} />
      <Promotions user={mock_user_0} />
      <Tasks title="Gain points in tasks" user={mock_user_0} />
      <Upcoming user={mock_user_0} />
    </main>
  );
}
