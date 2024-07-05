import { BetUpdateManyWithoutAppUsersInput } from "./BetUpdateManyWithoutAppUsersInput";
import { NotificationUpdateManyWithoutAppUsersInput } from "./NotificationUpdateManyWithoutAppUsersInput";
import { UserAchievementUpdateManyWithoutAppUsersInput } from "./UserAchievementUpdateManyWithoutAppUsersInput";

export type AppUserUpdateInput = {
  bets?: BetUpdateManyWithoutAppUsersInput;
  createdDate?: Date | null;
  email?: string | null;
  notifications?: NotificationUpdateManyWithoutAppUsersInput;
  password?: string | null;
  userAchievements?: UserAchievementUpdateManyWithoutAppUsersInput;
  username?: string | null;
};
