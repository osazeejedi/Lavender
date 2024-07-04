import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GameRoomWhereUniqueInput } from "../gameRoom/GameRoomWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  gameRoom?: GameRoomWhereUniqueInput;
  id?: StringFilter;
  messageContent?: StringNullableFilter;
  messageGameRoom?: StringNullableFilter;
  messageSender?: StringNullableFilter;
  room?: RoomWhereUniqueInput;
  sender?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
