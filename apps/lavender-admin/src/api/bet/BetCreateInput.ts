import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BetCreateInput = {
  amount?: number | null;
  appUser?: AppUserWhereUniqueInput | null;
  betAmount?: number | null;
  bettingAppUser?: string | null;
  bettingRoom?: string | null;
  odds?: number | null;
  room?: RoomWhereUniqueInput | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
