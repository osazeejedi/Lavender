import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BetList } from "./bet/BetList";
import { BetCreate } from "./bet/BetCreate";
import { BetEdit } from "./bet/BetEdit";
import { BetShow } from "./bet/BetShow";
import { RoomList } from "./room/RoomList";
import { RoomCreate } from "./room/RoomCreate";
import { RoomEdit } from "./room/RoomEdit";
import { RoomShow } from "./room/RoomShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserAchievementList } from "./userAchievement/UserAchievementList";
import { UserAchievementCreate } from "./userAchievement/UserAchievementCreate";
import { UserAchievementEdit } from "./userAchievement/UserAchievementEdit";
import { UserAchievementShow } from "./userAchievement/UserAchievementShow";
import { AchievementList } from "./achievement/AchievementList";
import { AchievementCreate } from "./achievement/AchievementCreate";
import { AchievementEdit } from "./achievement/AchievementEdit";
import { AchievementShow } from "./achievement/AchievementShow";
import { TournamentList } from "./tournament/TournamentList";
import { TournamentCreate } from "./tournament/TournamentCreate";
import { TournamentEdit } from "./tournament/TournamentEdit";
import { TournamentShow } from "./tournament/TournamentShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { ClanList } from "./clan/ClanList";
import { ClanCreate } from "./clan/ClanCreate";
import { ClanEdit } from "./clan/ClanEdit";
import { ClanShow } from "./clan/ClanShow";
import { GameRoomList } from "./gameRoom/GameRoomList";
import { GameRoomCreate } from "./gameRoom/GameRoomCreate";
import { GameRoomEdit } from "./gameRoom/GameRoomEdit";
import { GameRoomShow } from "./gameRoom/GameRoomShow";
import { AppUserList } from "./appUser/AppUserList";
import { AppUserCreate } from "./appUser/AppUserCreate";
import { AppUserEdit } from "./appUser/AppUserEdit";
import { AppUserShow } from "./appUser/AppUserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Lavender"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Bet"
          list={BetList}
          edit={BetEdit}
          create={BetCreate}
          show={BetShow}
        />
        <Resource
          name="Room"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          show={RoomShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UserAchievement"
          list={UserAchievementList}
          edit={UserAchievementEdit}
          create={UserAchievementCreate}
          show={UserAchievementShow}
        />
        <Resource
          name="Achievement"
          list={AchievementList}
          edit={AchievementEdit}
          create={AchievementCreate}
          show={AchievementShow}
        />
        <Resource
          name="Tournament"
          list={TournamentList}
          edit={TournamentEdit}
          create={TournamentCreate}
          show={TournamentShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="Clan"
          list={ClanList}
          edit={ClanEdit}
          create={ClanCreate}
          show={ClanShow}
        />
        <Resource
          name="GameRoom"
          list={GameRoomList}
          edit={GameRoomEdit}
          create={GameRoomCreate}
          show={GameRoomShow}
        />
        <Resource
          name="AppUser"
          list={AppUserList}
          edit={AppUserEdit}
          create={AppUserCreate}
          show={AppUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
