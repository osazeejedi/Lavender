import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="cryptoPaymentAddress" source="cryptoPaymentAddress" />
        <TextField label="Email" source="email" />
        <TextField label="favoriteGames" source="favoriteGames" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="location" source="location" />
        <TextField label="notifications" source="notifications" />
        <TextField label="privacySettings" source="privacySettings" />
        <TextField label="profilePicture" source="profilePicture" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="walletBalance" source="walletBalance" />
      </Datagrid>
    </List>
  );
};
