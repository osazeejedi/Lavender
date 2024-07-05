import { TransactionUpdateManyWithoutUserAccountsInput } from "./TransactionUpdateManyWithoutUserAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAccountUpdateInput = {
  balance?: number | null;
  transactions?: TransactionUpdateManyWithoutUserAccountsInput;
  user?: UserWhereUniqueInput | null;
};
