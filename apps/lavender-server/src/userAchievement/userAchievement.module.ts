import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserAchievementModuleBase } from "./base/userAchievement.module.base";
import { UserAchievementService } from "./userAchievement.service";
import { UserAchievementController } from "./userAchievement.controller";
import { UserAchievementResolver } from "./userAchievement.resolver";

@Module({
  imports: [UserAchievementModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserAchievementController],
  providers: [UserAchievementService, UserAchievementResolver],
  exports: [UserAchievementService],
})
export class UserAchievementModule {}
