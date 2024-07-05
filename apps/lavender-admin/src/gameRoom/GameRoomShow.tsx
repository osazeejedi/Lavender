import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GAMEROOM_TITLE_FIELD } from "./GameRoomTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";

export const GameRoomShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="betTypes" source="betTypes" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="gameRoomDescription" source="gameRoomDescription" />
        <TextField label="gameRoomName" source="gameRoomName" />
        <TextField label="ID" source="id" />
        <TextField label="matchSelection" source="matchSelection" />
        <TextField label="name" source="name" />
        <TextField label="roomType" source="roomType" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Message"
          target="gameRoomId"
          label="Messages"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
