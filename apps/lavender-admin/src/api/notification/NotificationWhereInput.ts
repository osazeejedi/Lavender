import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationWhereInput = {
  appUser?: AppUserWhereUniqueInput;
  id?: StringFilter;
  isRead?: BooleanNullableFilter;
  message?: StringNullableFilter;
};
