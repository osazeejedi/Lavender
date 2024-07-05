import { UserAccount } from "../userAccount/UserAccount";

export type Transaction = {
  account: string | null;
  amount: number | null;
  amountValue: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  transactionDate: Date | null;
  transactionTimestamp: Date | null;
  transactionType?: "Option1" | null;
  txType?: "Option1" | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  userAccount?: UserAccount | null;
};
