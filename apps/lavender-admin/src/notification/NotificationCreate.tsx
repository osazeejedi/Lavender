import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { AppUserTitle } from "../appUser/AppUserTitle";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="appUser.id" reference="AppUser" label="AppUser">
          <SelectInput optionText={AppUserTitle} />
        </ReferenceInput>
        <BooleanInput label="isRead" source="isRead" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Create>
  );
};
