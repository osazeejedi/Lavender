import { BetCreateNestedManyWithoutAppUsersInput } from "./BetCreateNestedManyWithoutAppUsersInput";
import { NotificationCreateNestedManyWithoutAppUsersInput } from "./NotificationCreateNestedManyWithoutAppUsersInput";
import { UserAchievementCreateNestedManyWithoutAppUsersInput } from "./UserAchievementCreateNestedManyWithoutAppUsersInput";

export type AppUserCreateInput = {
  bets?: BetCreateNestedManyWithoutAppUsersInput;
  createdDate?: Date | null;
  email?: string | null;
  notifications?: NotificationCreateNestedManyWithoutAppUsersInput;
  password?: string | null;
  userAchievements?: UserAchievementCreateNestedManyWithoutAppUsersInput;
  username?: string | null;
};
