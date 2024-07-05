import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserAchievementService } from "./userAchievement.service";
import { UserAchievementControllerBase } from "./base/userAchievement.controller.base";

@swagger.ApiTags("userAchievements")
@common.Controller("userAchievements")
export class UserAchievementController extends UserAchievementControllerBase {
  constructor(
    protected readonly service: UserAchievementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
