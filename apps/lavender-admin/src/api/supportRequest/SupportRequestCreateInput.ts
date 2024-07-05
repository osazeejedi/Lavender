import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SupportRequestCreateInput = {
  message?: string | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
