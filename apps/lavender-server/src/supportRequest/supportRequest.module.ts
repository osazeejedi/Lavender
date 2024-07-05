import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SupportRequestModuleBase } from "./base/supportRequest.module.base";
import { SupportRequestService } from "./supportRequest.service";
import { SupportRequestController } from "./supportRequest.controller";
import { SupportRequestResolver } from "./supportRequest.resolver";

@Module({
  imports: [SupportRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [SupportRequestController],
  providers: [SupportRequestService, SupportRequestResolver],
  exports: [SupportRequestService],
})
export class SupportRequestModule {}
