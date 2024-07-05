import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERACCOUNT_TITLE_FIELD } from "../userAccount/UserAccountTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="account" source="account" />
        <TextField label="amount" source="amount" />
        <TextField label="amountValue" source="amountValue" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="transactionDate" source="transactionDate" />
        <TextField label="transactionTimestamp" source="transactionTimestamp" />
        <TextField label="transactionType" source="transactionType" />
        <TextField label="txType" source="txType" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="userAccount"
          source="useraccount.id"
          reference="UserAccount"
        >
          <TextField source={USERACCOUNT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
