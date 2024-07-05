import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserAchievementServiceBase } from "./base/userAchievement.service.base";

@Injectable()
export class UserAchievementService extends UserAchievementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
