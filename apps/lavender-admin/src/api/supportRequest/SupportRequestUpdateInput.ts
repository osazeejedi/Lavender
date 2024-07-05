import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SupportRequestUpdateInput = {
  message?: string | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
