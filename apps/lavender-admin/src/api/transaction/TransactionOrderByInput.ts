import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  account?: SortOrder;
  amount?: SortOrder;
  amountValue?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  transactionDate?: SortOrder;
  transactionTimestamp?: SortOrder;
  transactionType?: SortOrder;
  txType?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userAccountId?: SortOrder;
};
