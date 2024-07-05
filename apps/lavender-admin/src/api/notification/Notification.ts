import { AppUser } from "../appUser/AppUser";

export type Notification = {
  appUser?: AppUser | null;
  createdAt: Date;
  id: string;
  isRead: boolean | null;
  message: string | null;
  updatedAt: Date;
};
