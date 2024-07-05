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
import { Bet } from "./Bet";
import { BetCountArgs } from "./BetCountArgs";
import { BetFindManyArgs } from "./BetFindManyArgs";
import { BetFindUniqueArgs } from "./BetFindUniqueArgs";
import { CreateBetArgs } from "./CreateBetArgs";
import { UpdateBetArgs } from "./UpdateBetArgs";
import { DeleteBetArgs } from "./DeleteBetArgs";
import { AppUser } from "../../appUser/base/AppUser";
import { Room } from "../../room/base/Room";
import { User } from "../../user/base/User";
import { BettingHistoryOutput } from "../BettingHistoryOutput";
import { FinalLeaderboardOutput } from "../FinalLeaderboardOutput";
import { PlaceBetInput } from "../PlaceBetInput";
import { BetSettlementInput } from "../../user/BetSettlementInput";
import { BetService } from "../bet.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Bet)
export class BetResolverBase {
  constructor(
    protected readonly service: BetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "read",
    possession: "any",
  })
  async _betsMeta(
    @graphql.Args() args: BetCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Bet])
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "read",
    possession: "any",
  })
  async bets(@graphql.Args() args: BetFindManyArgs): Promise<Bet[]> {
    return this.service.bets(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Bet, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "read",
    possession: "own",
  })
  async bet(@graphql.Args() args: BetFindUniqueArgs): Promise<Bet | null> {
    const result = await this.service.bet(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bet)
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "create",
    possession: "any",
  })
  async createBet(@graphql.Args() args: CreateBetArgs): Promise<Bet> {
    return await this.service.createBet({
      ...args,
      data: {
        ...args.data,

        appUser: args.data.appUser
          ? {
              connect: args.data.appUser,
            }
          : undefined,

        room: args.data.room
          ? {
              connect: args.data.room,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bet)
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "update",
    possession: "any",
  })
  async updateBet(@graphql.Args() args: UpdateBetArgs): Promise<Bet | null> {
    try {
      return await this.service.updateBet({
        ...args,
        data: {
          ...args.data,

          appUser: args.data.appUser
            ? {
                connect: args.data.appUser,
              }
            : undefined,

          room: args.data.room
            ? {
                connect: args.data.room,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
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

  @graphql.Mutation(() => Bet)
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "delete",
    possession: "any",
  })
  async deleteBet(@graphql.Args() args: DeleteBetArgs): Promise<Bet | null> {
    try {
      return await this.service.deleteBet(args);
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
  @graphql.ResolveField(() => AppUser, {
    nullable: true,
    name: "appUser",
  })
  @nestAccessControl.UseRoles({
    resource: "AppUser",
    action: "read",
    possession: "any",
  })
  async getAppUser(@graphql.Parent() parent: Bet): Promise<AppUser | null> {
    const result = await this.service.getAppUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Room, {
    nullable: true,
    name: "room",
  })
  @nestAccessControl.UseRoles({
    resource: "Room",
    action: "read",
    possession: "any",
  })
  async getRoom(@graphql.Parent() parent: Bet): Promise<Room | null> {
    const result = await this.service.getRoom(parent.id);

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
  async getUser(@graphql.Parent() parent: Bet): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => BettingHistoryOutput)
  async GetBettingHistory(
    @graphql.Args()
    args: string
  ): Promise<BettingHistoryOutput> {
    return this.service.GetBettingHistory(args);
  }

  @graphql.Query(() => FinalLeaderboardOutput)
  async GetFinalLeaderboard(
    @graphql.Args()
    args: string
  ): Promise<FinalLeaderboardOutput> {
    return this.service.GetFinalLeaderboard(args);
  }

  @graphql.Mutation(() => PlaceBetInput)
  async PlaceBet(
    @graphql.Args()
    args: PlaceBetInput
  ): Promise<PlaceBetInput> {
    return this.service.PlaceBet(args);
  }

  @graphql.Mutation(() => String)
  async SettleBets(
    @graphql.Args()
    args: BetSettlementInput
  ): Promise<string> {
    return this.service.SettleBets(args);
  }
}
