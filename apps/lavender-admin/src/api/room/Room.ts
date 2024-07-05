import { Bet } from "../bet/Bet";
import { Message } from "../message/Message";

export type Room = {
  bets?: Array<Bet>;
  createdAt: Date;
  description: string | null;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  owner: string | null;
  roomDescription: string | null;
  roomName: string | null;
  roomOwner: string | null;
  updatedAt: Date;
};
