import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserAchievementTitle } from "../userAchievement/UserAchievementTitle";

export const AchievementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
