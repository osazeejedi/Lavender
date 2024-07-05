/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserAchievementService } from "../userAchievement.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserAchievementCreateInput } from "./UserAchievementCreateInput";
import { UserAchievement } from "./UserAchievement";
import { UserAchievementFindManyArgs } from "./UserAchievementFindManyArgs";
import { UserAchievementWhereUniqueInput } from "./UserAchievementWhereUniqueInput";
import { UserAchievementUpdateInput } from "./UserAchievementUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserAchievementControllerBase {
  constructor(
    protected readonly service: UserAchievementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserAchievement })
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUserAchievement(
    @common.Body() data: UserAchievementCreateInput
  ): Promise<UserAchievement> {
    return await this.service.createUserAchievement({
      data: {
        ...data,

        achievement: data.achievement
          ? {
              connect: data.achievement,
            }
          : undefined,

        appUser: data.appUser
          ? {
              connect: data.appUser,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,

        userAchievement: data.userAchievement
          ? {
              connect: data.userAchievement,
            }
          : undefined,
      },
      select: {
        achievement: {
          select: {
            id: true,
          },
        },

        achievementAppUser: true,
        achievementDateEarned: true,

        appUser: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dateAchieved: true,
        dateEarned: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        userAchievement: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserAchievement] })
  @ApiNestedQuery(UserAchievementFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userAchievements(
    @common.Req() request: Request
  ): Promise<UserAchievement[]> {
    const args = plainToClass(UserAchievementFindManyArgs, request.query);
    return this.service.userAchievements({
      ...args,
      select: {
        achievement: {
          select: {
            id: true,
          },
        },

        achievementAppUser: true,
        achievementDateEarned: true,

        appUser: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dateAchieved: true,
        dateEarned: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        userAchievement: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserAchievement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userAchievement(
    @common.Param() params: UserAchievementWhereUniqueInput
  ): Promise<UserAchievement | null> {
    const result = await this.service.userAchievement({
      where: params,
      select: {
        achievement: {
          select: {
            id: true,
          },
        },

        achievementAppUser: true,
        achievementDateEarned: true,

        appUser: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dateAchieved: true,
        dateEarned: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        userAchievement: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserAchievement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUserAchievement(
    @common.Param() params: UserAchievementWhereUniqueInput,
    @common.Body() data: UserAchievementUpdateInput
  ): Promise<UserAchievement | null> {
    try {
      return await this.service.updateUserAchievement({
        where: params,
        data: {
          ...data,

          achievement: data.achievement
            ? {
                connect: data.achievement,
              }
            : undefined,

          appUser: data.appUser
            ? {
                connect: data.appUser,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,

          userAchievement: data.userAchievement
            ? {
                connect: data.userAchievement,
              }
            : undefined,
        },
        select: {
          achievement: {
            select: {
              id: true,
            },
          },

          achievementAppUser: true,
          achievementDateEarned: true,

          appUser: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          dateAchieved: true,
          dateEarned: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          userAchievement: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserAchievement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserAchievement(
    @common.Param() params: UserAchievementWhereUniqueInput
  ): Promise<UserAchievement | null> {
    try {
      return await this.service.deleteUserAchievement({
        where: params,
        select: {
          achievement: {
            select: {
              id: true,
            },
          },

          achievementAppUser: true,
          achievementDateEarned: true,

          appUser: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          dateAchieved: true,
          dateEarned: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          userAchievement: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/userAchievements")
  @ApiNestedQuery(UserAchievementFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "read",
    possession: "any",
  })
  async findUserAchievements(
    @common.Req() request: Request,
    @common.Param() params: UserAchievementWhereUniqueInput
  ): Promise<UserAchievement[]> {
    const query = plainToClass(UserAchievementFindManyArgs, request.query);
    const results = await this.service.findUserAchievements(params.id, {
      ...query,
      select: {
        achievement: {
          select: {
            id: true,
          },
        },

        achievementAppUser: true,
        achievementDateEarned: true,

        appUser: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dateAchieved: true,
        dateEarned: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        userAchievement: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/userAchievements")
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "update",
    possession: "any",
  })
  async connectUserAchievements(
    @common.Param() params: UserAchievementWhereUniqueInput,
    @common.Body() body: UserAchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userAchievements: {
        connect: body,
      },
    };
    await this.service.updateUserAchievement({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/userAchievements")
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "update",
    possession: "any",
  })
  async updateUserAchievements(
    @common.Param() params: UserAchievementWhereUniqueInput,
    @common.Body() body: UserAchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userAchievements: {
        set: body,
      },
    };
    await this.service.updateUserAchievement({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/userAchievements")
  @nestAccessControl.UseRoles({
    resource: "UserAchievement",
    action: "update",
    possession: "any",
  })
  async disconnectUserAchievements(
    @common.Param() params: UserAchievementWhereUniqueInput,
    @common.Body() body: UserAchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userAchievements: {
        disconnect: body,
      },
    };
    await this.service.updateUserAchievement({
      where: params,
      data,
      select: { id: true },
    });
  }
}
