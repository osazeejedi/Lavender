import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GameRoomApIsService } from "./gameroomapis.service";
import { BetOnGameRoomInput } from "../gameRoomApIs/BetOnGameRoomInput";
import { CreateEsportsGameRoomInput } from "../gameRoomApIs/CreateEsportsGameRoomInput";

@swagger.ApiTags("gameRoomApIs")
@common.Controller("gameRoomApIs")
export class GameRoomApIsController {
  constructor(protected readonly service: GameRoomApIsService) {}

  @common.Post("/gameRooms/:id/bet")
  @swagger.ApiOkResponse({
    type: BetOnGameRoomInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async BetOnGameRoom(
    @common.Body()
    body: string
  ): Promise<BetOnGameRoomInput> {
        return this.service.BetOnGameRoom(body);
      }

  @common.Post("/gameRooms/createEsports")
  @swagger.ApiOkResponse({
    type: CreateEsportsGameRoomInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateEsportsGameRoom(
    @common.Body()
    body: string
  ): Promise<CreateEsportsGameRoomInput> {
        return this.service.CreateEsportsGameRoom(body);
      }

  @common.Get("/gameRooms/esports/:type")
  @swagger.ApiOkResponse({
    type: CreateEsportsGameRoomInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetEsportsGameRooms(
    @common.Body()
    body: string
  ): Promise<CreateEsportsGameRoomInput[]> {
        return this.service.GetEsportsGameRooms(body);
      }
}
