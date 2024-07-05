import { TransactionCreateNestedManyWithoutUserAccountsInput } from "./TransactionCreateNestedManyWithoutUserAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserAccountCreateInput = {
  balance?: number | null;
  transactions?: TransactionCreateNestedManyWithoutUserAccountsInput;
  user?: UserWhereUniqueInput | null;
};
