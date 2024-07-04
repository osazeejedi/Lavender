import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { GAMEROOM_TITLE_FIELD } from "../gameRoom/GameRoomTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
