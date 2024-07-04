import { GameRoom } from "../gameRoom/GameRoom";
import { Room } from "../room/Room";

export type Message = {
  content: string | null;
  createdAt: Date;
  gameRoom?: GameRoom | null;
  id: string;
  messageContent: string | null;
  messageGameRoom: string | null;
  messageSender: string | null;
  room?: Room | null;
  sender: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
