import { AchievementWhereUniqueInput } from "../achievement/AchievementWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserAchievementWhereUniqueInput } from "./UserAchievementWhereUniqueInput";
import { UserAchievementListRelationFilter } from "./UserAchievementListRelationFilter";

export type UserAchievementWhereInput = {
  achievement?: AchievementWhereUniqueInput;
  achievementAppUser?: StringNullableFilter;
  achievementDateEarned?: DateTimeNullableFilter;
  appUser?: AppUserWhereUniqueInput;
  dateAchieved?: DateTimeNullableFilter;
  dateEarned?: DateTimeNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  userAchievement?: UserAchievementWhereUniqueInput;
  userAchievements?: UserAchievementListRelationFilter;
};
