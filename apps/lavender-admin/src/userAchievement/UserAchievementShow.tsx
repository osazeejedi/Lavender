import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACHIEVEMENT_TITLE_FIELD } from "../achievement/AchievementTitle";
import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { USERACHIEVEMENT_TITLE_FIELD } from "./UserAchievementTitle";

export const UserAchievementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="achievement"
          source="achievement.id"
          reference="Achievement"
        >
          <TextField source={ACHIEVEMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="achievementAppUser" source="achievementAppUser" />
        <TextField
          label="achievementDateEarned"
          source="achievementDateEarned"
        />
        <ReferenceField label="AppUser" source="appuser.id" reference="AppUser">
          <TextField source={APPUSER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateAchieved" source="dateAchieved" />
        <TextField label="dateEarned" source="dateEarned" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="userAchievement"
          source="userachievement.id"
          reference="UserAchievement"
        >
          <TextField source={USERACHIEVEMENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="UserAchievement"
          target="userAchievementId"
          label="UserAchievements"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="achievement"
              source="achievement.id"
              reference="Achievement"
            >
              <TextField source={ACHIEVEMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="achievementAppUser" source="achievementAppUser" />
            <TextField
              label="achievementDateEarned"
              source="achievementDateEarned"
            />
            <ReferenceField
              label="AppUser"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateAchieved" source="dateAchieved" />
            <TextField label="dateEarned" source="dateEarned" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="userAchievement"
              source="userachievement.id"
              reference="UserAchievement"
            >
              <TextField source={USERACHIEVEMENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};