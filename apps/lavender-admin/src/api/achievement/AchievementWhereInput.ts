import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserAchievementListRelationFilter } from "../userAchievement/UserAchievementListRelationFilter";

export type AchievementWhereInput = {
  badgeUrl?: JsonFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  points?: IntNullableFilter;
  userAchievements?: UserAchievementListRelationFilter;
};
