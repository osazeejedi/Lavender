import { AchievementWhereUniqueInput } from "../achievement/AchievementWhereUniqueInput";
import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserAchievementWhereUniqueInput } from "./UserAchievementWhereUniqueInput";
import { UserAchievementCreateNestedManyWithoutUserAchievementsInput } from "./UserAchievementCreateNestedManyWithoutUserAchievementsInput";

export type UserAchievementCreateInput = {
  achievement?: AchievementWhereUniqueInput | null;
  achievementAppUser?: string | null;
  achievementDateEarned?: Date | null;
  appUser?: AppUserWhereUniqueInput | null;
  dateAchieved?: Date | null;
  dateEarned?: Date | null;
  user?: UserWhereUniqueInput | null;
  userAchievement?: UserAchievementWhereUniqueInput | null;
  userAchievements?: UserAchievementCreateNestedManyWithoutUserAchievementsInput;
};
