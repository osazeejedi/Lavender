import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GAMEROOM_TITLE_FIELD } from "../gameRoom/GameRoomTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";

export const MessageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Messages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="GameRoom"
          source="gameroom.id"
          reference="GameRoom"
        >
          <TextField source={GAMEROOM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="messageContent" source="messageContent" />
        <TextField label="messageGameRoom" source="messageGameRoom" />
        <TextField label="messageSender" source="messageSender" />
        <ReferenceField label="room" source="room.id" reference="Room">
          <TextField source={ROOM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="sender" source="sender" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
