import { InputJsonValue } from "../../types";
import { UserAchievementCreateNestedManyWithoutAchievementsInput } from "./UserAchievementCreateNestedManyWithoutAchievementsInput";

export type AchievementCreateInput = {
  badgeUrl?: InputJsonValue;
  description?: string | null;
  name?: string | null;
  points?: number | null;
  userAchievements?: UserAchievementCreateNestedManyWithoutAchievementsInput;
};
