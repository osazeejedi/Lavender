import { Achievement as TAchievement } from "../api/achievement/Achievement";

export const ACHIEVEMENT_TITLE_FIELD = "name";

export const AchievementTitle = (record: TAchievement): string => {
  return record.name?.toString() || String(record.id);
};
