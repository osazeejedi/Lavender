import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USERACCOUNT_TITLE_FIELD } from "../userAccount/UserAccountTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
