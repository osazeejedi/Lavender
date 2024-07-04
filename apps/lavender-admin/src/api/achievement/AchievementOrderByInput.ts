import { SortOrder } from "../../util/SortOrder";

export type AchievementOrderByInput = {
  badgeUrl?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  points?: SortOrder;
  updatedAt?: SortOrder;
};
