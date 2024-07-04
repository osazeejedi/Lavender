import { SortOrder } from "../../util/SortOrder";

export type UserAchievementOrderByInput = {
  achievementId?: SortOrder;
  achievementAppUser?: SortOrder;
  achievementDateEarned?: SortOrder;
  appUserId?: SortOrder;
  createdAt?: SortOrder;
  dateAchieved?: SortOrder;
  dateEarned?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userAchievementId?: SortOrder;
};
