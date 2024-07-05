import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GameRoomList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GameRooms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="betTypes" source="betTypes" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="gameRoomDescription" source="gameRoomDescription" />
        <TextField label="gameRoomName" source="gameRoomName" />
        <TextField label="ID" source="id" />
        <TextField label="matchSelection" source="matchSelection" />
        <TextField label="name" source="name" />
        <TextField label="roomType" source="roomType" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
