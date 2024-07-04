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
import { GameRoomService } from "../gameRoom.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GameRoomCreateInput } from "./GameRoomCreateInput";
import { GameRoom } from "./GameRoom";
import { GameRoomFindManyArgs } from "./GameRoomFindManyArgs";
import { GameRoomWhereUniqueInput } from "./GameRoomWhereUniqueInput";
import { GameRoomUpdateInput } from "./GameRoomUpdateInput";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GameRoomControllerBase {
  constructor(
    protected readonly service: GameRoomService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameRoom })
  @nestAccessControl.UseRoles({
    resource: "GameRoom",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createGameRoom(
    @common.Body() data: GameRoomCreateInput
  ): Promise<GameRoom> {
    return await this.service.createGameRoom({
      data: data,
      select: {
        createdAt: true,
        description: true,
        gameRoomDescription: true,
        gameRoomName: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GameRoom] })
  @ApiNestedQuery(GameRoomFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GameRoom",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameRooms(@common.Req() request: Request): Promise<GameRoom[]> {
    const args = plainToClass(GameRoomFindManyArgs, request.query);
    return this.service.gameRooms({
      ...args,
      select: {
        createdAt: true,
        description: true,
        gameRoomDescription: true,
        gameRoomName: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameRoom",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameRoom(
    @common.Param() params: GameRoomWhereUniqueInput
  ): Promise<GameRoom | null> {
    const result = await this.service.gameRoom({
      where: params,
      select: {
        createdAt: true,
        description: true,
        gameRoomDescription: true,
        gameRoomName: true,
        id: true,
        name: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: GameRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameRoom",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateGameRoom(
    @common.Param() params: GameRoomWhereUniqueInput,
    @common.Body() data: GameRoomUpdateInput
  ): Promise<GameRoom | null> {
    try {
      return await this.service.updateGameRoom({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          gameRoomDescription: true,
          gameRoomName: true,
          id: true,
          name: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: GameRoom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameRoom",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGameRoom(
    @common.Param() params: GameRoomWhereUniqueInput
  ): Promise<GameRoom | null> {
    try {
      return await this.service.deleteGameRoom({
        where: params,
        select: {
          createdAt: true,
          description: true,
          gameRoomDescription: true,
          gameRoomName: true,
          id: true,
          name: true,
          updatedAt: true,
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
  @common.Get("/:id/messages")
  @ApiNestedQuery(MessageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async findMessages(
    @common.Req() request: Request,
    @common.Param() params: GameRoomWhereUniqueInput
  ): Promise<Message[]> {
    const query = plainToClass(MessageFindManyArgs, request.query);
    const results = await this.service.findMessages(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,

        gameRoom: {
          select: {
            id: true,
          },
        },

        id: true,
        messageContent: true,
        messageGameRoom: true,
        messageSender: true,

        room: {
          select: {
            id: true,
          },
        },

        sender: true,
        timestamp: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "GameRoom",
    action: "update",
    possession: "any",
  })
  async connectMessages(
    @common.Param() params: GameRoomWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        connect: body,
      },
    };
    await this.service.updateGameRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "GameRoom",
    action: "update",
    possession: "any",
  })
  async updateMessages(
    @common.Param() params: GameRoomWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        set: body,
      },
    };
    await this.service.updateGameRoom({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "GameRoom",
    action: "update",
    possession: "any",
  })
  async disconnectMessages(
    @common.Param() params: GameRoomWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        disconnect: body,
      },
    };
    await this.service.updateGameRoom({
      where: params,
      data,
      select: { id: true },
    });
  }
}