import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  gameRoomId?: SortOrder;
  id?: SortOrder;
  messageContent?: SortOrder;
  messageGameRoom?: SortOrder;
  messageSender?: SortOrder;
  roomId?: SortOrder;
  sender?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
