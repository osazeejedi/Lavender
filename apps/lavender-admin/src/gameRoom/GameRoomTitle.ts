import { GameRoom as TGameRoom } from "../api/gameRoom/GameRoom";

export const GAMEROOM_TITLE_FIELD = "gameRoomName";

export const GameRoomTitle = (record: TGameRoom): string => {
  return record.gameRoomName?.toString() || String(record.id);
};
