import { Module } from "@nestjs/common";
import { GameRoomApIsService } from "./gameroomapis.service";
import { GameRoomApIsController } from "./gameroomapis.controller";
import { GameRoomApIsResolver } from "./gameroomapis.resolver";

@Module({
  controllers: [GameRoomApIsController],
  providers: [GameRoomApIsService, GameRoomApIsResolver],
  exports: [GameRoomApIsService],
})
export class GameRoomApIsModule {}
