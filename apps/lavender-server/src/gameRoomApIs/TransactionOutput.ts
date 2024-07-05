import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("TransactionOutputObject")
class TransactionOutput {
    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    amountValue!: number;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    txType!: string;

    @Field(() => Date)
    @Type(() => Date)
    transactionTimestamp!: Date;
}

export { TransactionOutput as TransactionOutput };