import { AppUser } from "../appUser/AppUser";
import { Room } from "../room/Room";
import { User } from "../user/User";

export type Bet = {
  amount: number | null;
  appUser?: AppUser | null;
  betAmount: number | null;
  bettingAppUser: string | null;
  bettingRoom: string | null;
  createdAt: Date;
  id: string;
  odds: number | null;
  room?: Room | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
