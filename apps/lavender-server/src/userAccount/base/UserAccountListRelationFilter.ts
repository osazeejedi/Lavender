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
import { UserAccountWhereInput } from "./UserAccountWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserAccountListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserAccountWhereInput,
  })
  @ValidateNested()
  @Type(() => UserAccountWhereInput)
  @IsOptional()
  @Field(() => UserAccountWhereInput, {
    nullable: true,
  })
  every?: UserAccountWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserAccountWhereInput,
  })
  @ValidateNested()
  @Type(() => UserAccountWhereInput)
  @IsOptional()
  @Field(() => UserAccountWhereInput, {
    nullable: true,
  })
  some?: UserAccountWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserAccountWhereInput,
  })
  @ValidateNested()
  @Type(() => UserAccountWhereInput)
  @IsOptional()
  @Field(() => UserAccountWhereInput, {
    nullable: true,
  })
  none?: UserAccountWhereInput;
}
export { UserAccountListRelationFilter as UserAccountListRelationFilter };