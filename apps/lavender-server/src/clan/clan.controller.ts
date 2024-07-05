import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClanService } from "./clan.service";
import { ClanControllerBase } from "./base/clan.controller.base";

@swagger.ApiTags("clans")
@common.Controller("clans")
export class ClanController extends ClanControllerBase {
  constructor(
    protected readonly service: ClanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
