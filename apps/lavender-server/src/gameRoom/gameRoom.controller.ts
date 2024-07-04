import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameRoomService } from "./gameRoom.service";
import { GameRoomControllerBase } from "./base/gameRoom.controller.base";

@swagger.ApiTags("gameRooms")
@common.Controller("gameRooms")
export class GameRoomController extends GameRoomControllerBase {
  constructor(
    protected readonly service: GameRoomService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
