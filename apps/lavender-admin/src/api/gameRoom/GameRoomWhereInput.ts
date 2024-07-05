import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type GameRoomWhereInput = {
  betTypes?: JsonFilter;
  description?: StringNullableFilter;
  gameRoomDescription?: StringNullableFilter;
  gameRoomName?: StringNullableFilter;
  id?: StringFilter;
  matchSelection?: StringNullableFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  roomType?: StringNullableFilter;
};
