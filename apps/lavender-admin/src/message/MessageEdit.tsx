import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { GameRoomTitle } from "../gameRoom/GameRoomTitle";
import { RoomTitle } from "../room/RoomTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput
          source="gameRoom.id"
          reference="GameRoom"
          label="GameRoom"
        >
          <SelectInput optionText={GameRoomTitle} />
        </ReferenceInput>
        <TextInput label="messageContent" multiline source="messageContent" />
        <TextInput label="messageGameRoom" source="messageGameRoom" />
        <TextInput label="messageSender" source="messageSender" />
        <ReferenceInput source="room.id" reference="Room" label="room">
          <SelectInput optionText={RoomTitle} />
        </ReferenceInput>
        <TextInput label="sender" source="sender" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
