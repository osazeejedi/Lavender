/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { UserAchievement } from "./UserAchievement";
import { UserAchievementCountArgs } from "./UserAchievementCountArgs";
import { UserAchievementFindManyArgs } from "./UserAchievementFindManyArgs";
import { UserAchievementFindUniqueArgs } from "./UserAchievementFindUniqueArgs";
import { CreateUserAchievementArgs } from "./CreateUserAchievementArgs";
import { UpdateUserAchievementArgs } from "./UpdateUserAchievementArgs";
import { DeleteUserAchievementArgs } from "./DeleteUserAchievementArgs";
import { Achievement } from "../../achievement/base/Achievement";
import { AppUser } from "../../appUser/base/AppUser";
import { User } from "../../user/base/User";
import { UserAchievementService } from "../userAchievement.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserAchievement)
export class UserAchievementResolverBase {
  constructor(
    protected readonly service: UserAchievementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "read",
    possession: "any",
  })
  async _userAchievementsMeta(
    @graphql.Args() args: UserAchievementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserAchievement])
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "read",
    possession: "any",
  })
  async userAchievements(
    @graphql.Args() args: UserAchievementFindManyArgs
  ): Promise<UserAchievement[]> {
    return this.service.userAchievements(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserAchievement, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "read",
    possession: "own",
  })
  async userAchievement(
    @graphql.Args() args: UserAchievementFindUniqueArgs
  ): Promise<UserAchievement | null> {
    const result = await this.service.userAchievement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserAchievement)
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "create",
    possession: "any",
  })
  async createUserAchievement(
    @graphql.Args() args: CreateUserAchievementArgs
  ): Promise<UserAchievement> {
    return await this.service.createUserAchievement({
      ...args,
      data: {
        ...args.data,

        achievement: args.data.achievement
          ? {
              connect: args.data.achievement,
            }
          : undefined,

        appUser: args.data.appUser
          ? {
              connect: args.data.appUser,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,

        userAchievement: args.data.userAchievement
          ? {
              connect: args.data.userAchievement,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserAchievement)
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "update",
    possession: "any",
  })
  async updateUserAchievement(
    @graphql.Args() args: UpdateUserAchievementArgs
  ): Promise<UserAchievement | null> {
    try {
      return await this.service.updateUserAchievement({
        ...args,
        data: {
          ...args.data,

          achievement: args.data.achievement
            ? {
                connect: args.data.achievement,
              }
            : undefined,

          appUser: args.data.appUser
            ? {
                connect: args.data.appUser,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,

          userAchievement: args.data.userAchievement
            ? {
                connect: args.data.userAchievement,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserAchievement)
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "delete",
    possession: "any",
  })
  async deleteUserAchievement(
    @graphql.Args() args: DeleteUserAchievementArgs
  ): Promise<UserAchievement | null> {
    try {
      return await this.service.deleteUserAchievement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [UserAchievement], { name: "userAchievements" })
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "read",
    possession: "any",
  })
  async findUserAchievements(
    @graphql.Parent() parent: UserAchievement,
    @graphql.Args() args: UserAchievementFindManyArgs
  ): Promise<UserAchievement[]> {
    const results = await this.service.findUserAchievements(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Achievement, {
    nullable: true,
    name: "achievement",
  })
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "read",
    possession: "any",
  })
  async getAchievement(
    @graphql.Parent() parent: UserAchievement
  ): Promise<Achievement | null> {
    const result = await this.service.getAchievement(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => AppUser, {
    nullable: true,
    name: "appUser",
  })
  @nestAccessControl.UseRoles({
    resource: "AppUser",
    action: "read",
    possession: "any",
  })
  async getAppUser(
    @graphql.Parent() parent: UserAchievement
  ): Promise<AppUser | null> {
    const result = await this.service.getAppUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(
    @graphql.Parent() parent: UserAchievement
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => UserAchievement, {
    nullable: true,
    name: "userAchievement",
  })
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "read",
    possession: "any",
  })
  async getUserAchievement(
    @graphql.Parent() parent: UserAchievement
  ): Promise<UserAchievement | null> {
    const result = await this.service.getUserAchievement(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}