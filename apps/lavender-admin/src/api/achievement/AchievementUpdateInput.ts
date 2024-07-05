import { InputJsonValue } from "../../types";
import { UserAchievementUpdateManyWithoutAchievementsInput } from "./UserAchievementUpdateManyWithoutAchievementsInput";

export type AchievementUpdateInput = {
  badgeUrl?: InputJsonValue;
  description?: string | null;
  name?: string | null;
  points?: number | null;
  userAchievements?: UserAchievementUpdateManyWithoutAchievementsInput;
};
