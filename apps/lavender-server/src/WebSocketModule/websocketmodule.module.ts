import { Module } from "@nestjs/common";
import { WebSocketModuleService } from "./websocketmodule.service";
import { WebSocketModuleController } from "./websocketmodule.controller";
import { WebSocketModuleResolver } from "./websocketmodule.resolver";

@Module({
  controllers: [WebSocketModuleController],
  providers: [WebSocketModuleService, WebSocketModuleResolver],
  exports: [WebSocketModuleService],
})
export class WebSocketModuleModule {}
