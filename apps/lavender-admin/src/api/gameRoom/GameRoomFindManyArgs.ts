import { GameRoomWhereInput } from "./GameRoomWhereInput";
import { GameRoomOrderByInput } from "./GameRoomOrderByInput";

export type GameRoomFindManyArgs = {
  where?: GameRoomWhereInput;
  orderBy?: Array<GameRoomOrderByInput>;
  skip?: number;
  take?: number;
};
