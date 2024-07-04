import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  cryptoPaymentAddress?: SortOrder;
  email?: SortOrder;
  favoriteGames?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  location?: SortOrder;
  notifications?: SortOrder;
  password?: SortOrder;
  privacySettings?: SortOrder;
  profilePicture?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  walletBalance?: SortOrder;
};
