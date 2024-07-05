import { BetListRelationFilter } from "../bet/BetListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SupportRequestListRelationFilter } from "../supportRequest/SupportRequestListRelationFilter";
import { UserAccountListRelationFilter } from "../userAccount/UserAccountListRelationFilter";
import { UserAchievementListRelationFilter } from "../userAchievement/UserAchievementListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type UserWhereInput = {
  bets?: BetListRelationFilter;
  bio?: StringNullableFilter;
  cryptoPaymentAddress?: StringNullableFilter;
  email?: StringNullableFilter;
  favoriteGames?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  location?: StringNullableFilter;
  notifications?: JsonFilter;
  privacySettings?: JsonFilter;
  profilePicture?: JsonFilter;
  supportRequests?: SupportRequestListRelationFilter;
  userAccounts?: UserAccountListRelationFilter;
  userAchievements?: UserAchievementListRelationFilter;
  username?: StringFilter;
  walletBalance?: FloatNullableFilter;
};
