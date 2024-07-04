import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BetWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  odds?: FloatNullableFilter;
  room?: RoomWhereUniqueInput;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
