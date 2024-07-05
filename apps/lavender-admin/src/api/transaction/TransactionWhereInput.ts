import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserAccountWhereUniqueInput } from "../userAccount/UserAccountWhereUniqueInput";

export type TransactionWhereInput = {
  account?: StringNullableFilter;
  amount?: FloatNullableFilter;
  amountValue?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  transactionDate?: DateTimeNullableFilter;
  transactionTimestamp?: DateTimeNullableFilter;
  transactionType?: "Option1";
  txType?: "Option1";
  typeField?: "Option1";
  userAccount?: UserAccountWhereUniqueInput;
};
