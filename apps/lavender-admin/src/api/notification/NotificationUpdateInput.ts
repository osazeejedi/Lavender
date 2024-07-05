import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type NotificationUpdateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  isRead?: boolean | null;
  message?: string | null;
};
