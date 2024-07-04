import { MessageUpdateManyWithoutGameRoomsInput } from "./MessageUpdateManyWithoutGameRoomsInput";

export type GameRoomUpdateInput = {
  description?: string | null;
  gameRoomDescription?: string | null;
  gameRoomName?: string | null;
  messages?: MessageUpdateManyWithoutGameRoomsInput;
  name?: string | null;
};
