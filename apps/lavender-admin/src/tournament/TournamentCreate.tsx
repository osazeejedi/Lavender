import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TournamentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput
          label="tournamentDescription"
          multiline
          source="tournamentDescription"
        />
        <DateTimeInput label="tournamentEndDate" source="tournamentEndDate" />
        <TextInput label="tournamentName" source="tournamentName" />
        <DateTimeInput
          label="tournamentStartDate"
          source="tournamentStartDate"
        />
      </SimpleForm>
    </Create>
  );
};
