import { BetUpdateManyWithoutUsersInput } from "./BetUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SupportRequestUpdateManyWithoutUsersInput } from "./SupportRequestUpdateManyWithoutUsersInput";
import { UserAccountUpdateManyWithoutUsersInput } from "./UserAccountUpdateManyWithoutUsersInput";
import { UserAchievementUpdateManyWithoutUsersInput } from "./UserAchievementUpdateManyWithoutUsersInput";

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
  supportRequests?: SupportRequestUpdateManyWithoutUsersInput;
  userAccounts?: UserAccountUpdateManyWithoutUsersInput;
  userAchievements?: UserAchievementUpdateManyWithoutUsersInput;
  username?: string;
  walletBalance?: number | null;
};
