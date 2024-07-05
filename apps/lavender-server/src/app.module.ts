import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";
import { BetModule } from "./bet/bet.module";
import { RoomModule } from "./room/room.module";
import { MessageModule } from "./message/message.module";
import { UserModule } from "./user/user.module";
import { UserAchievementModule } from "./userAchievement/userAchievement.module";
import { AchievementModule } from "./achievement/achievement.module";
import { TournamentModule } from "./tournament/tournament.module";
import { NotificationModule } from "./notification/notification.module";
import { ClanModule } from "./clan/clan.module";
import { GameRoomModule } from "./gameRoom/gameRoom.module";
import { AppUserModule } from "./appUser/appUser.module";
import { GameRoomApIsModule } from "./GameRoomApIs/gameroomapis.module";
import { WebSocketModuleModule } from "./WebSocketModule/websocketmodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    KafkaModule,
    BetModule,
    RoomModule,
    MessageModule,
    UserModule,
    UserAchievementModule,
    AchievementModule,
    TournamentModule,
    NotificationModule,
    ClanModule,
    GameRoomModule,
    AppUserModule,
    GameRoomApIsModule,
    WebSocketModuleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],

      useFactory: async (configService: ConfigService) => {
        const host = configService.get("REDIS_HOST");
        const port = configService.get("REDIS_PORT");
        const username = configService.get("REDIS_USERNAME");
        const password = configService.get("REDIS_PASSWORD");
        const ttl = configService.get("REDIS_TTL", 5000);

        return {
          store: await redisStore({
            host: host,
            port: port,
            username: username,
            password: password,
            ttl: ttl,
          }),
        };
      },

      inject: [ConfigService],
    }),
  ],
  providers: [],
})
export class AppModule {}
