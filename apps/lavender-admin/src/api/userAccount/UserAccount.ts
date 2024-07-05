import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type UserAccount = {
  balance: number | null;
  createdAt: Date;
  id: string;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
