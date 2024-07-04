import { BetListRelationFilter } from "../bet/BetListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
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
  username?: StringFilter;
  walletBalance?: FloatNullableFilter;
};
