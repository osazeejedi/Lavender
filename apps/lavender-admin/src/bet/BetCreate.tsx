import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AppUserTitle } from "../appUser/AppUserTitle";
import { RoomTitle } from "../room/RoomTitle";
import { UserTitle } from "../user/UserTitle";

export const BetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="appUser.id" reference="AppUser" label="AppUser">
          <SelectInput optionText={AppUserTitle} />
        </ReferenceInput>
        <NumberInput label="betAmount" source="betAmount" />
        <TextInput label="BettingAppUser" source="bettingAppUser" />
        <TextInput label="BettingRoom" source="bettingRoom" />
        <NumberInput label="odds" source="odds" />
        <ReferenceInput source="room.id" reference="Room" label="room">
          <SelectInput optionText={RoomTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
