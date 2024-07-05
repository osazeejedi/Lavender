import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { AppUserTitle } from "../appUser/AppUserTitle";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="appUser.id" reference="AppUser" label="AppUser">
          <SelectInput optionText={AppUserTitle} />
        </ReferenceInput>
        <BooleanInput label="isRead" source="isRead" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Edit>
  );
};
