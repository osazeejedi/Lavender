import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameRoomModuleBase } from "./base/gameRoom.module.base";
import { GameRoomService } from "./gameRoom.service";
import { GameRoomController } from "./gameRoom.controller";
import { GameRoomResolver } from "./gameRoom.resolver";

@Module({
  imports: [GameRoomModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameRoomController],
  providers: [GameRoomService, GameRoomResolver],
  exports: [GameRoomService],
})
export class GameRoomModule {}
