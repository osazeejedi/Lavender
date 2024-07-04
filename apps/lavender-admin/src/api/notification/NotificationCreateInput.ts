import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type NotificationCreateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  isRead?: boolean | null;
  message?: string | null;
};
