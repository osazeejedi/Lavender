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

import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsDate,
  IsEnum,
  ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";
import { EnumTransactionTransactionType } from "./EnumTransactionTransactionType";
import { EnumTransactionTxType } from "./EnumTransactionTxType";
import { EnumTransactionTypeField } from "./EnumTransactionTypeField";
import { UserAccountWhereUniqueInput } from "../../userAccount/base/UserAccountWhereUniqueInput";

@InputType()
class TransactionCreateInput {
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
  account?: string | null;

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
  amount?: number | null;

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
  amountValue?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  transactionDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  transactionTimestamp?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumTransactionTransactionType,
  })
  @IsEnum(EnumTransactionTransactionType)
  @IsOptional()
  @Field(() => EnumTransactionTransactionType, {
    nullable: true,
  })
  transactionType?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumTransactionTxType,
  })
  @IsEnum(EnumTransactionTxType)
  @IsOptional()
  @Field(() => EnumTransactionTxType, {
    nullable: true,
  })
  txType?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumTransactionTypeField,
  })
  @IsEnum(EnumTransactionTypeField)
  @IsOptional()
  @Field(() => EnumTransactionTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserAccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserAccountWhereUniqueInput)
  @IsOptional()
  @Field(() => UserAccountWhereUniqueInput, {
    nullable: true,
  })
  userAccount?: UserAccountWhereUniqueInput | null;
}

export { TransactionCreateInput as TransactionCreateInput };
