import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "account";

export const TransactionTitle = (record: TTransaction): string => {
  return record.account?.toString() || String(record.id);
};
