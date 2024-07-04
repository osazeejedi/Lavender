import { Message } from "../message/Message";

export type GameRoom = {
  createdAt: Date;
  description: string | null;
  gameRoomDescription: string | null;
  gameRoomName: string | null;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  updatedAt: Date;
};
