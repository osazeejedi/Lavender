import { BetUpdateManyWithoutRoomsInput } from "./BetUpdateManyWithoutRoomsInput";
import { MessageUpdateManyWithoutRoomsInput } from "./MessageUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  bets?: BetUpdateManyWithoutRoomsInput;
  description?: string | null;
  messages?: MessageUpdateManyWithoutRoomsInput;
  name?: string | null;
  owner?: string | null;
};
