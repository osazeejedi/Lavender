/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserAchievementWhereInput } from "./UserAchievementWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserAchievementOrderByInput } from "./UserAchievementOrderByInput";

@ArgsType()
class UserAchievementFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserAchievementWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserAchievementWhereInput, { nullable: true })
  @Type(() => UserAchievementWhereInput)
  where?: UserAchievementWhereInput;

  @ApiProperty({
    required: false,
    type: [UserAchievementOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserAchievementOrderByInput], { nullable: true })
  @Type(() => UserAchievementOrderByInput)
  orderBy?: Array<UserAchievementOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserAchievementFindManyArgs as UserAchievementFindManyArgs };
