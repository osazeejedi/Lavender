import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  appUserId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isRead?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
};
