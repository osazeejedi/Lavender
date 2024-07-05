import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BetWhereInput = {
  amount?: FloatNullableFilter;
  appUser?: AppUserWhereUniqueInput;
  betAmount?: FloatNullableFilter;
  bettingAppUser?: StringNullableFilter;
  bettingRoom?: StringNullableFilter;
  id?: StringFilter;
  odds?: FloatNullableFilter;
  room?: RoomWhereUniqueInput;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
