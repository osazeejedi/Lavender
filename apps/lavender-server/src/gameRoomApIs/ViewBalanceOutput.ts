import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("ViewBalanceOutputObject")
class ViewBalanceOutput {
    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    balance!: number;
}

export { ViewBalanceOutput as ViewBalanceOutput };