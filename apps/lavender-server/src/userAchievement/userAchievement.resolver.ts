import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserAchievementResolverBase } from "./base/userAchievement.resolver.base";
import { UserAchievement } from "./base/UserAchievement";
import { UserAchievementService } from "./userAchievement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserAchievement)
export class UserAchievementResolver extends UserAchievementResolverBase {
  constructor(
    protected readonly service: UserAchievementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
