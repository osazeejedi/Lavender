import { Bet } from "../bet/Bet";
import { JsonValue } from "type-fest";
import { SupportRequest } from "../supportRequest/SupportRequest";
import { UserAccount } from "../userAccount/UserAccount";
import { UserAchievement } from "../userAchievement/UserAchievement";

export type User = {
  bets?: Array<Bet>;
  bio: string | null;
  createdAt: Date;
  cryptoPaymentAddress: string | null;
  email: string | null;
  favoriteGames: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  location: string | null;
  notifications: JsonValue;
  privacySettings: JsonValue;
  profilePicture: JsonValue;
  roles: JsonValue;
  supportRequests?: Array<SupportRequest>;
  updatedAt: Date;
  userAccounts?: Array<UserAccount>;
  userAchievements?: Array<UserAchievement>;
  username: string;
  walletBalance: number | null;
};
