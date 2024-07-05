import { UserAccountWhereUniqueInput } from "../userAccount/UserAccountWhereUniqueInput";

export type TransactionUpdateInput = {
  account?: string | null;
  amount?: number | null;
  amountValue?: number | null;
  date?: Date | null;
  transactionDate?: Date | null;
  transactionTimestamp?: Date | null;
  transactionType?: "Option1" | null;
  txType?: "Option1" | null;
  typeField?: "Option1" | null;
  userAccount?: UserAccountWhereUniqueInput | null;
};
