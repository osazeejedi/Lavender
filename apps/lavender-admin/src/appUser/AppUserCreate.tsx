import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { BetTitle } from "../bet/BetTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { UserAchievementTitle } from "../userAchievement/UserAchievementTitle";

export const AppUserCreate = (props: CreateProps): React.ReactElement => {
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
        <DateTimeInput label="createdDate" source="createdDate" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <TextInput label="password" source="password" />
        <ReferenceArrayInput
          source="userAchievements"
          reference="UserAchievement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserAchievementTitle} />
        </ReferenceArrayInput>
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
