import { UserAchievement as TUserAchievement } from "../api/userAchievement/UserAchievement";

export const USERACHIEVEMENT_TITLE_FIELD = "achievementAppUser";

export const UserAchievementTitle = (record: TUserAchievement): string => {
  return record.achievementAppUser?.toString() || String(record.id);
};
