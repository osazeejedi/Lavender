import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { UserAccountTitle } from "../userAccount/UserAccountTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="account" source="account" />
        <NumberInput label="amount" source="amount" />
        <NumberInput label="amountValue" source="amountValue" />
        <DateTimeInput label="date" source="date" />
        <DateTimeInput label="transactionDate" source="transactionDate" />
        <DateTimeInput
          label="transactionTimestamp"
          source="transactionTimestamp"
        />
        <SelectInput
          source="transactionType"
          label="transactionType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="txType"
          label="txType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="userAccount.id"
          reference="UserAccount"
          label="userAccount"
        >
          <SelectInput optionText={UserAccountTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
