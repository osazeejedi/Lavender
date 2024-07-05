import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  PasswordInput,
  NumberInput,
} from "react-admin";

import { BetTitle } from "../bet/BetTitle";
import { SupportRequestTitle } from "../supportRequest/SupportRequestTitle";
import { UserAccountTitle } from "../userAccount/UserAccountTitle";
import { UserAchievementTitle } from "../userAchievement/UserAchievementTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bets"
          reference="Bet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BetTitle} />
        </ReferenceArrayInput>
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="cryptoPaymentAddress" source="cryptoPaymentAddress" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="favoriteGames" source="favoriteGames" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="location" source="location" />
        <div />
        <PasswordInput label="Password" source="password" />
        <div />
        <div />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="supportRequests"
          reference="SupportRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SupportRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userAccounts"
          reference="UserAccount"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserAccountTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userAchievements"
          reference="UserAchievement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserAchievementTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <NumberInput label="walletBalance" source="walletBalance" />
      </SimpleForm>
    </Create>
  );
};
