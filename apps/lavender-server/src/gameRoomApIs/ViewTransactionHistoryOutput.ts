import { ObjectType, Field } from "@nestjs/graphql";
import { TransactionOutput } from "./TransactionOutput";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("ViewTransactionHistoryOutputObject")
class ViewTransactionHistoryOutput {
    @Field(() => [[TransactionOutput]])
    @ApiProperty({
        required: true,
        type: () => [TransactionOutput]
    })
    @Type(() => TransactionOutput)
    transactions!: TransactionOutput[];
}

export { ViewTransactionHistoryOutput as ViewTransactionHistoryOutput };