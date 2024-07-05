import { SortOrder } from "../../util/SortOrder";

export type UserAccountOrderByInput = {
  balance?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
