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
import { User } from "./User";
import { UserCountArgs } from "./UserCountArgs";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserFindUniqueArgs } from "./UserFindUniqueArgs";
import { CreateUserArgs } from "./CreateUserArgs";
import { UpdateUserArgs } from "./UpdateUserArgs";
import { DeleteUserArgs } from "./DeleteUserArgs";
import { BetFindManyArgs } from "../../bet/base/BetFindManyArgs";
import { Bet } from "../../bet/base/Bet";
import { LinkPaymentMethodInput } from "../LinkPaymentMethodInput";
import { UserLoginInput } from "../UserLoginInput";
import { UserRegistrationInput } from "../UserRegistrationInput";
import { SetPreferencesInput } from "../SetPreferencesInput";
import { UpdateProfileInput } from "../UpdateProfileInput";
import { UploadProfilePictureInput } from "../UploadProfilePictureInput";
import { UserService } from "../user.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => User)
export class UserResolverBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async _usersMeta(
    @graphql.Args() args: UserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return this.service.users(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    const result = await this.service.user(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    return await this.service.createUser({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
    try {
      return await this.service.updateUser({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  async deleteUser(@graphql.Args() args: DeleteUserArgs): Promise<User | null> {
    try {
      return await this.service.deleteUser(args);
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
  @graphql.ResolveField(() => [Bet], { name: "bets" })
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "read",
    possession: "any",
  })
  async findBets(
    @graphql.Parent() parent: User,
    @graphql.Args() args: BetFindManyArgs
  ): Promise<Bet[]> {
    const results = await this.service.findBets(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.Mutation(() => LinkPaymentMethodInput)
  async LinkPaymentMethod(
    @graphql.Args()
    args: LinkPaymentMethodInput
  ): Promise<LinkPaymentMethodInput> {
    return this.service.LinkPaymentMethod(args);
  }

  @graphql.Mutation(() => String)
  async Login(
    @graphql.Args()
    args: UserLoginInput
  ): Promise<string> {
    return this.service.Login(args);
  }

  @graphql.Mutation(() => UserRegistrationInput)
  async RegisterUser(
    @graphql.Args()
    args: UserRegistrationInput
  ): Promise<UserRegistrationInput> {
    return this.service.RegisterUser(args);
  }

  @graphql.Mutation(() => SetPreferencesInput)
  async SetPreferences(
    @graphql.Args()
    args: SetPreferencesInput
  ): Promise<SetPreferencesInput> {
    return this.service.SetPreferences(args);
  }

  @graphql.Mutation(() => UpdateProfileInput)
  async UpdateProfile(
    @graphql.Args()
    args: UpdateProfileInput
  ): Promise<UpdateProfileInput> {
    return this.service.UpdateProfile(args);
  }

  @graphql.Mutation(() => UploadProfilePictureInput)
  async UploadProfilePicture(
    @graphql.Args()
    args: UploadProfilePictureInput
  ): Promise<UploadProfilePictureInput> {
    return this.service.UploadProfilePicture(args);
  }
}