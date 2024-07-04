import { SortOrder } from "../../util/SortOrder";

export type GameRoomOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  gameRoomDescription?: SortOrder;
  gameRoomName?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
