import { InputJsonValue } from "../../types";
import { MessageCreateNestedManyWithoutGameRoomsInput } from "./MessageCreateNestedManyWithoutGameRoomsInput";

export type GameRoomCreateInput = {
  betTypes?: InputJsonValue;
  description?: string | null;
  gameRoomDescription?: string | null;
  gameRoomName?: string | null;
  matchSelection?: string | null;
  messages?: MessageCreateNestedManyWithoutGameRoomsInput;
  name?: string | null;
  roomType?: string | null;
};
