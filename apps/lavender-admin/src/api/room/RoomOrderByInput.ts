import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  roomDescription?: SortOrder;
  roomName?: SortOrder;
  roomOwner?: SortOrder;
  updatedAt?: SortOrder;
};
