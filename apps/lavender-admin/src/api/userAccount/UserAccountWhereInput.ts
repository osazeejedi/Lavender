import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAccountWhereInput = {
  balance?: FloatNullableFilter;
  id?: StringFilter;
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
