import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RoomList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Rooms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <TextField label="roomDescription" source="roomDescription" />
        <TextField label="roomName" source="roomName" />
        <TextField label="roomOwner" source="roomOwner" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
