import { GameRoomWhereUniqueInput } from "./GameRoomWhereUniqueInput";
import { GameRoomUpdateInput } from "./GameRoomUpdateInput";

export type UpdateGameRoomArgs = {
  where: GameRoomWhereUniqueInput;
  data: GameRoomUpdateInput;
};
