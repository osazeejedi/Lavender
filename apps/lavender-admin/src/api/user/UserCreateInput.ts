import { BetCreateNestedManyWithoutUsersInput } from "./BetCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bets?: BetCreateNestedManyWithoutUsersInput;
  bio?: string | null;
  cryptoPaymentAddress?: string | null;
  email?: string | null;
  favoriteGames?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  location?: string | null;
  notifications?: InputJsonValue;
  password: string;
  privacySettings?: InputJsonValue;
  profilePicture?: InputJsonValue;
  roles: InputJsonValue;
  username: string;
  walletBalance?: number | null;
};
