import { MessageCreateNestedManyWithoutGameRoomsInput } from "./MessageCreateNestedManyWithoutGameRoomsInput";

export type GameRoomCreateInput = {
  description?: string | null;
  gameRoomDescription?: string | null;
  gameRoomName?: string | null;
  messages?: MessageCreateNestedManyWithoutGameRoomsInput;
  name?: string | null;
};
