import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const TournamentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="startDate" source="startDate" />
        <TextField
          label="tournamentDescription"
          source="tournamentDescription"
        />
        <TextField label="tournamentEndDate" source="tournamentEndDate" />
        <TextField label="tournamentName" source="tournamentName" />
        <TextField label="tournamentStartDate" source="tournamentStartDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
