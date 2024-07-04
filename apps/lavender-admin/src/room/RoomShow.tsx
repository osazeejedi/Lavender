import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { ROOM_TITLE_FIELD } from "./RoomTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { GAMEROOM_TITLE_FIELD } from "../gameRoom/GameRoomTitle";

export const RoomShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="roomDescription" source="roomDescription" />
        <TextField label="roomName" source="roomName" />
        <TextField label="roomOwner" source="roomOwner" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Bet" target="roomId" label="Bets">
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="AppUser"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="betAmount" source="betAmount" />
            <TextField label="BettingAppUser" source="bettingAppUser" />
            <TextField label="BettingRoom" source="bettingRoom" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="odds" source="odds" />
            <ReferenceField label="room" source="room.id" reference="Room">
              <TextField source={ROOM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Message"
          target="roomId"
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
