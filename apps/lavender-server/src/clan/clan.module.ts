import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClanModuleBase } from "./base/clan.module.base";
import { ClanService } from "./clan.service";
import { ClanController } from "./clan.controller";
import { ClanResolver } from "./clan.resolver";

@Module({
  imports: [ClanModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClanController],
  providers: [ClanService, ClanResolver],
  exports: [ClanService],
})
export class ClanModule {}
