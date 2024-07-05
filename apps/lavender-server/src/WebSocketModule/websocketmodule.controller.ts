import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { WebSocketModuleService } from "./websocketmodule.service";

@swagger.ApiTags("webSocketModules")
@common.Controller("webSocketModules")
export class WebSocketModuleController {
  constructor(protected readonly service: WebSocketModuleService) {}

  @common.Post("/notifications/push")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PushNotification(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.PushNotification(body);
      }

  @common.Get("/updates/subscribe")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubscribeLiveUpdates(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SubscribeLiveUpdates(body);
      }

  @common.Get("/chatroom/subscribe")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SubscribeRoomChat(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SubscribeRoomChat(body);
      }
}
