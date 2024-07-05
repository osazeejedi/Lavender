import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SupportRequestService } from "./supportRequest.service";
import { SupportRequestControllerBase } from "./base/supportRequest.controller.base";

@swagger.ApiTags("supportRequests")
@common.Controller("supportRequests")
export class SupportRequestController extends SupportRequestControllerBase {
  constructor(
    protected readonly service: SupportRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
