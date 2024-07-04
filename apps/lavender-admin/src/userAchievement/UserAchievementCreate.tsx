import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AchievementTitle } from "../achievement/AchievementTitle";
import { AppUserTitle } from "../appUser/AppUserTitle";
import { UserTitle } from "../user/UserTitle";
import { UserAchievementTitle } from "./UserAchievementTitle";

export const UserAchievementCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="achievement.id"
          reference="Achievement"
          label="achievement"
        >
          <SelectInput optionText={AchievementTitle} />
        </ReferenceInput>
        <TextInput label="achievementAppUser" source="achievementAppUser" />
        <DateTimeInput
          label="achievementDateEarned"
          source="achievementDateEarned"
        />
        <ReferenceInput source="appUser.id" reference="AppUser" label="AppUser">
          <SelectInput optionText={AppUserTitle} />
        </ReferenceInput>
        <DateTimeInput label="dateAchieved" source="dateAchieved" />
        <DateTimeInput label="dateEarned" source="dateEarned" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userAchievement.id"
          reference="UserAchievement"
          label="userAchievement"
        >
          <SelectInput optionText={UserAchievementTitle} />
        </ReferenceInput>
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
