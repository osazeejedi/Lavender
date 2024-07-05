import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TournamentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
