import Level from "../level";

type User = {
  name: string;
  level: Level;
  levelPercentage: number;
  profilePicture: string;
  totalPoints: number;
  email: string;
};

export default User;
