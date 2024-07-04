import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { APPUSER_TITLE_FIELD } from "./AppUserTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ACHIEVEMENT_TITLE_FIELD } from "../achievement/AchievementTitle";
import { USERACHIEVEMENT_TITLE_FIELD } from "../userAchievement/UserAchievementTitle";

export const AppUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdDate" source="createdDate" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="password" source="password" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
        <ReferenceManyField reference="Bet" target="appUserId" label="Bets">
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="AppUser"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="betAmount" source="betAmount" />
            <TextField label="BettingAppUser" source="bettingAppUser" />
            <TextField label="BettingRoom" source="bettingRoom" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="odds" source="odds" />
            <ReferenceField label="room" source="room.id" reference="Room">
              <TextField source={ROOM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Notification"
          target="appUserId"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AppUser"
              source="appuser.id"
              reference="AppUser"
            >
              <TextField source={APPUSER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isRead" source="isRead" />
            <TextField label="message" source="message" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserAchievement"
          target="appUserId"
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
