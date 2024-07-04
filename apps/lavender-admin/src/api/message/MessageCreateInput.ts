import { GameRoomWhereUniqueInput } from "../gameRoom/GameRoomWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  gameRoom?: GameRoomWhereUniqueInput | null;
  messageContent?: string | null;
  messageGameRoom?: string | null;
  messageSender?: string | null;
  room?: RoomWhereUniqueInput | null;
  sender?: string | null;
  timestamp?: Date | null;
};
