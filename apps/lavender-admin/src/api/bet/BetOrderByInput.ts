import { SortOrder } from "../../util/SortOrder";

export type BetOrderByInput = {
  amount?: SortOrder;
  appUserId?: SortOrder;
  betAmount?: SortOrder;
  bettingAppUser?: SortOrder;
  bettingRoom?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  odds?: SortOrder;
  roomId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
