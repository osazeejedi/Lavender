import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BetTitle } from "../bet/BetTitle";
import { MessageTitle } from "../message/MessageTitle";

export const RoomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bets"
          reference="Bet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BetTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="messages"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <TextInput label="roomDescription" multiline source="roomDescription" />
        <TextInput label="roomName" source="roomName" />
        <TextInput label="roomOwner" source="roomOwner" />
      </SimpleForm>
    </Edit>
  );
};
