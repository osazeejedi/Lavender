import { BetListRelationFilter } from "../bet/BetListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type RoomWhereInput = {
  bets?: BetListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  roomDescription?: StringNullableFilter;
  roomName?: StringNullableFilter;
  roomOwner?: StringNullableFilter;
};
