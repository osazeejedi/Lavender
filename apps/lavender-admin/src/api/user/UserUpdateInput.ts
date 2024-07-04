import { BetUpdateManyWithoutUsersInput } from "./BetUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bets?: BetUpdateManyWithoutUsersInput;
  bio?: string | null;
  cryptoPaymentAddress?: string | null;
  email?: string | null;
  favoriteGames?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  location?: string | null;
  notifications?: InputJsonValue;
  password?: string;
  privacySettings?: InputJsonValue;
  profilePicture?: InputJsonValue;
  roles?: InputJsonValue;
  username?: string;
  walletBalance?: number | null;
};
