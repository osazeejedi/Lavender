import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { APPUSER_TITLE_FIELD } from "../appUser/AppUserTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { ACHIEVEMENT_TITLE_FIELD } from "../achievement/AchievementTitle";
import { USERACHIEVEMENT_TITLE_FIELD } from "../userAchievement/UserAchievementTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="cryptoPaymentAddress" source="cryptoPaymentAddress" />
        <TextField label="Email" source="email" />
        <TextField label="favoriteGames" source="favoriteGames" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="location" source="location" />
        <TextField label="notifications" source="notifications" />
        <TextField label="privacySettings" source="privacySettings" />
        <TextField label="profilePicture" source="profilePicture" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="walletBalance" source="walletBalance" />
        <ReferenceManyField reference="Bet" target="userId" label="Bets">
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
          reference="UserAchievement"
          target="userId"
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
