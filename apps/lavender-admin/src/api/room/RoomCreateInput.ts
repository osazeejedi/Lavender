import { BetCreateNestedManyWithoutRoomsInput } from "./BetCreateNestedManyWithoutRoomsInput";
import { MessageCreateNestedManyWithoutRoomsInput } from "./MessageCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  bets?: BetCreateNestedManyWithoutRoomsInput;
  description?: string | null;
  messages?: MessageCreateNestedManyWithoutRoomsInput;
  name?: string | null;
  owner?: string | null;
};
