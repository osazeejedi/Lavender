import { Achievement } from "../achievement/Achievement";
import { AppUser } from "../appUser/AppUser";
import { User } from "../user/User";

export type UserAchievement = {
  achievement?: Achievement | null;
  achievementAppUser: string | null;
  achievementDateEarned: Date | null;
  appUser?: AppUser | null;
  createdAt: Date;
  dateAchieved: Date | null;
  dateEarned: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
  userAchievement?: UserAchievement | null;
  userAchievements?: Array<UserAchievement>;
};
