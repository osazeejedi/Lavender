import { JsonValue } from "type-fest";
import { UserAchievement } from "../userAchievement/UserAchievement";

export type Achievement = {
  badgeUrl: JsonValue;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  points: number | null;
  updatedAt: Date;
  userAchievements?: Array<UserAchievement>;
};
