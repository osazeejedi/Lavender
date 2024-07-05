import { SortOrder } from "../../util/SortOrder";

export type GameRoomOrderByInput = {
  betTypes?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  gameRoomDescription?: SortOrder;
  gameRoomName?: SortOrder;
  id?: SortOrder;
  matchSelection?: SortOrder;
  name?: SortOrder;
  roomType?: SortOrder;
  updatedAt?: SortOrder;
};
