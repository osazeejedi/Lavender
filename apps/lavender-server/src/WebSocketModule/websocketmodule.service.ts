import { Injectable } from "@nestjs/common";

@Injectable()
export class WebSocketModuleService {
  constructor() {}
  async PushNotification(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubscribeLiveUpdates(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SubscribeRoomChat(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
