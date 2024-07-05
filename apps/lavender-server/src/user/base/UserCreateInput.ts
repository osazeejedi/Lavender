/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BetCreateNestedManyWithoutUsersInput } from "./BetCreateNestedManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { SupportRequestCreateNestedManyWithoutUsersInput } from "./SupportRequestCreateNestedManyWithoutUsersInput";
import { UserAccountCreateNestedManyWithoutUsersInput } from "./UserAccountCreateNestedManyWithoutUsersInput";
import { UserAchievementCreateNestedManyWithoutUsersInput } from "./UserAchievementCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => BetCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => BetCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => BetCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  bets?: BetCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bio?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cryptoPaymentAddress?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  favoriteGames?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  notifications?: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  privacySettings?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  profilePicture?: InputJsonValue;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => SupportRequestCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => SupportRequestCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => SupportRequestCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  supportRequests?: SupportRequestCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => UserAccountCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserAccountCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserAccountCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  userAccounts?: UserAccountCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => UserAchievementCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserAchievementCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserAchievementCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  userAchievements?: UserAchievementCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  walletBalance?: number | null;
}

export { UserCreateInput as UserCreateInput };
