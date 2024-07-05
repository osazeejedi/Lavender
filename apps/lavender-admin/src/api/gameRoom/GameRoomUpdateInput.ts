import { InputJsonValue } from "../../types";
import { MessageUpdateManyWithoutGameRoomsInput } from "./MessageUpdateManyWithoutGameRoomsInput";

export type GameRoomUpdateInput = {
  betTypes?: InputJsonValue;
  description?: string | null;
  gameRoomDescription?: string | null;
  gameRoomName?: string | null;
  matchSelection?: string | null;
  messages?: MessageUpdateManyWithoutGameRoomsInput;
  name?: string | null;
  roomType?: string | null;
};
