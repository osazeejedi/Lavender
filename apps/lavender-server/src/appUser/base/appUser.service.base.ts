/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  AppUser as PrismaAppUser,
  Bet as PrismaBet,
  Notification as PrismaNotification,
  UserAchievement as PrismaUserAchievement,
} from "@prisma/client";

export class AppUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AppUserCountArgs, "select">): Promise<number> {
    return this.prisma.appUser.count(args);
  }

  async appUsers(args: Prisma.AppUserFindManyArgs): Promise<PrismaAppUser[]> {
    return this.prisma.appUser.findMany(args);
  }
  async appUser(
    args: Prisma.AppUserFindUniqueArgs
  ): Promise<PrismaAppUser | null> {
    return this.prisma.appUser.findUnique(args);
  }
  async createAppUser(args: Prisma.AppUserCreateArgs): Promise<PrismaAppUser> {
    return this.prisma.appUser.create(args);
  }
  async updateAppUser(args: Prisma.AppUserUpdateArgs): Promise<PrismaAppUser> {
    return this.prisma.appUser.update(args);
  }
  async deleteAppUser(args: Prisma.AppUserDeleteArgs): Promise<PrismaAppUser> {
    return this.prisma.appUser.delete(args);
  }

  async findBets(
    parentId: string,
    args: Prisma.BetFindManyArgs
  ): Promise<PrismaBet[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bets(args);
  }

  async findNotifications(
    parentId: string,
    args: Prisma.NotificationFindManyArgs
  ): Promise<PrismaNotification[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .notifications(args);
  }

  async findUserAchievements(
    parentId: string,
    args: Prisma.UserAchievementFindManyArgs
  ): Promise<PrismaUserAchievement[]> {
    return this.prisma.appUser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .userAchievements(args);
  }
}
