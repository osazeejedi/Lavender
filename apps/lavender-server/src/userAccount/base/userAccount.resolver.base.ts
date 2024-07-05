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
import { UserAccount } from "./UserAccount";
import { UserAccountCountArgs } from "./UserAccountCountArgs";
import { UserAccountFindManyArgs } from "./UserAccountFindManyArgs";
import { UserAccountFindUniqueArgs } from "./UserAccountFindUniqueArgs";
import { CreateUserAccountArgs } from "./CreateUserAccountArgs";
import { UpdateUserAccountArgs } from "./UpdateUserAccountArgs";
import { DeleteUserAccountArgs } from "./DeleteUserAccountArgs";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { User } from "../../user/base/User";
import { UserAccountService } from "../userAccount.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserAccount)
export class UserAccountResolverBase {
  constructor(
    protected readonly service: UserAccountService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserAccount",
    action: "read",
    possession: "any",
  })
  async _userAccountsMeta(
    @graphql.Args() args: UserAccountCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserAccount])
  @nestAccessControl.UseRoles({
    resource: "UserAccount",
    action: "read",
    possession: "any",
  })
  async userAccounts(
    @graphql.Args() args: UserAccountFindManyArgs
  ): Promise<UserAccount[]> {
    return this.service.userAccounts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserAccount, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserAccount",
    action: "read",
    possession: "own",
  })
  async userAccount(
    @graphql.Args() args: UserAccountFindUniqueArgs
  ): Promise<UserAccount | null> {
    const result = await this.service.userAccount(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserAccount)
  @nestAccessControl.UseRoles({
    resource: "UserAccount",
    action: "create",
    possession: "any",
  })
  async createUserAccount(
    @graphql.Args() args: CreateUserAccountArgs
  ): Promise<UserAccount> {
    return await this.service.createUserAccount({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserAccount)
  @nestAccessControl.UseRoles({
    resource: "UserAccount",
    action: "update",
    possession: "any",
  })
  async updateUserAccount(
    @graphql.Args() args: UpdateUserAccountArgs
  ): Promise<UserAccount | null> {
    try {
      return await this.service.updateUserAccount({
        ...args,
        data: {
          ...args.data,

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

  @graphql.Mutation(() => UserAccount)
  @nestAccessControl.UseRoles({
    resource: "UserAccount",
    action: "delete",
    possession: "any",
  })
  async deleteUserAccount(
    @graphql.Args() args: DeleteUserAccountArgs
  ): Promise<UserAccount | null> {
    try {
      return await this.service.deleteUserAccount(args);
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
  @graphql.ResolveField(() => [Transaction], { name: "transactions" })
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async findTransactions(
    @graphql.Parent() parent: UserAccount,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
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
  async getUser(@graphql.Parent() parent: UserAccount): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
