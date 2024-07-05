import { JsonValue } from "type-fest";
import { Message } from "../message/Message";

export type GameRoom = {
  betTypes: JsonValue;
  createdAt: Date;
  description: string | null;
  gameRoomDescription: string | null;
  gameRoomName: string | null;
  id: string;
  matchSelection: string | null;
  messages?: Array<Message>;
  name: string | null;
  roomType: string | null;
  updatedAt: Date;
};
