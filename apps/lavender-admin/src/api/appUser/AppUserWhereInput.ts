import { BetListRelationFilter } from "../bet/BetListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { UserAchievementListRelationFilter } from "../userAchievement/UserAchievementListRelationFilter";

export type AppUserWhereInput = {
  bets?: BetListRelationFilter;
  createdDate?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  notifications?: NotificationListRelationFilter;
  password?: StringNullableFilter;
  userAchievements?: UserAchievementListRelationFilter;
  username?: StringNullableFilter;
};
