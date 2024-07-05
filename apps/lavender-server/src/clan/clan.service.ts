import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClanServiceBase } from "./base/clan.service.base";

@Injectable()
export class ClanService extends ClanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
