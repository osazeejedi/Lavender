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
import { UserAchievementWhereUniqueInput } from "./UserAchievementWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserAchievementUpdateInput } from "./UserAchievementUpdateInput";

@ArgsType()
class UpdateUserAchievementArgs {
  @ApiProperty({
    required: true,
    type: () => UserAchievementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserAchievementWhereUniqueInput)
  @Field(() => UserAchievementWhereUniqueInput, { nullable: false })
  where!: UserAchievementWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserAchievementUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserAchievementUpdateInput)
  @Field(() => UserAchievementUpdateInput, { nullable: false })
  data!: UserAchievementUpdateInput;
}

export { UpdateUserAchievementArgs as UpdateUserAchievementArgs };
