import { Bet } from "../bet/Bet";
import { Notification } from "../notification/Notification";
import { UserAchievement } from "../userAchievement/UserAchievement";

export type AppUser = {
  bets?: Array<Bet>;
  createdAt: Date;
  createdDate: Date | null;
  email: string | null;
  id: string;
  notifications?: Array<Notification>;
  password: string | null;
  updatedAt: Date;
  userAchievements?: Array<UserAchievement>;
  username: string | null;
};
