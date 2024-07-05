import { SortOrder } from "../../util/SortOrder";

export type AppUserOrderByInput = {
  createdAt?: SortOrder;
  createdDate?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
