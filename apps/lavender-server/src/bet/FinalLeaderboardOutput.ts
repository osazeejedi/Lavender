import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("FinalLeaderboardOutputObject")
class FinalLeaderboardOutput {
    @Field(() => [GraphQLJSON])
    leaderboard!: InputJsonValue;
}

export { FinalLeaderboardOutput as FinalLeaderboardOutput };