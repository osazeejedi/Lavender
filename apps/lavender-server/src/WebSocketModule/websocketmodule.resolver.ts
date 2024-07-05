import * as graphql from "@nestjs/graphql";
import { WebSocketModuleService } from "./websocketmodule.service";

export class WebSocketModuleResolver {
  constructor(protected readonly service: WebSocketModuleService) {}

  @graphql.Mutation(() => String)
  async PushNotification(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.PushNotification(args);
  }

  @graphql.Query(() => String)
  async SubscribeLiveUpdates(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SubscribeLiveUpdates(args);
  }

  @graphql.Query(() => String)
  async SubscribeRoomChat(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SubscribeRoomChat(args);
  }
}
