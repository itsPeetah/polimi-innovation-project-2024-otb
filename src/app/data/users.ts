import User from "@/lib/user";

export const mock_user_0: User = {
  name: "User name",
  level: "intrepid",
  levelPercentage: 0.64,
  profilePicture: "/doesntexist.png",
  totalPoints: 640,
  email: "user.name@example.com",
};

export const mock_users_leaderboard: User[] = [
  //   {
  //     name: "User name",
  //     level: "dauntless",
  //     levelPercentage: 0.6,
  //     profilePicture: "/doesntexist.png",
  //     totalPoints: 320,
  //     email: "user.name@example.com",
  //   },
  {
    name: "Alice Smith",
    level: "dauntless",
    levelPercentage: 0.72,
    profilePicture: "/profile/alice.png",
    totalPoints: 780,
    email: "alice.smith@example.com",
  },
  {
    name: "Bob Johnson",
    level: "dauntless",
    levelPercentage: 0.45,
    profilePicture: "/profile/bob.png",
    totalPoints: 450,
    email: "bob.johnson@example.com",
  },
  {
    name: "Charlie Brown",
    level: "dauntless",
    levelPercentage: 0.33,
    profilePicture: "/profile/charlie.png",
    totalPoints: 330,
    email: "charlie.brown@example.com",
  },
  {
    name: "Daisy Miller",
    level: "dauntless",
    levelPercentage: 0.89,
    profilePicture: "/profile/daisy.png",
    totalPoints: 890,
    email: "daisy.miller@example.com",
  },
  {
    name: "Edward Wilson",
    level: "dauntless",
    levelPercentage: 0.52,
    profilePicture: "/profile/edward.png",
    totalPoints: 520,
    email: "edward.wilson@example.com",
  },
  {
    name: "Fiona Garcia",
    level: "dauntless",
    levelPercentage: 0.15,
    profilePicture: "/profile/fiona.png",
    totalPoints: 150,
    email: "fiona.garcia@example.com",
  },
];
