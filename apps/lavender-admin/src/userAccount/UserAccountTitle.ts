import { UserAccount as TUserAccount } from "../api/userAccount/UserAccount";

export const USERACCOUNT_TITLE_FIELD = "id";

export const UserAccountTitle = (record: TUserAccount): string => {
  return record.id?.toString() || String(record.id);
};
