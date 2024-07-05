/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserAccountWhereUniqueInput } from "../../userAccount/base/UserAccountWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserAccountUpdateManyWithoutUsersInput {
  @Field(() => [UserAccountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAccountWhereUniqueInput],
  })
  connect?: Array<UserAccountWhereUniqueInput>;

  @Field(() => [UserAccountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAccountWhereUniqueInput],
  })
  disconnect?: Array<UserAccountWhereUniqueInput>;

  @Field(() => [UserAccountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserAccountWhereUniqueInput],
  })
  set?: Array<UserAccountWhereUniqueInput>;
}

export { UserAccountUpdateManyWithoutUsersInput as UserAccountUpdateManyWithoutUsersInput };
