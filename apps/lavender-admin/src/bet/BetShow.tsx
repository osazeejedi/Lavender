import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <ReferenceField label="AppUser" source="appuser.id" reference="AppUser">
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
      </SimpleShowLayout>
    </Show>
  );
};
