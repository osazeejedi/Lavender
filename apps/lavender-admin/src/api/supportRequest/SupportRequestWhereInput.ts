import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SupportRequestWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
