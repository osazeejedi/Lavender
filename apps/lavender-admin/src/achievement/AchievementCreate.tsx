import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserAchievementTitle } from "../userAchievement/UserAchievementTitle";

export const AchievementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="points" source="points" />
        <ReferenceArrayInput
          source="userAchievements"
          reference="UserAchievement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserAchievementTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
