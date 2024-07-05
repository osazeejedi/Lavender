import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
@ObjectType("SetPreferencesInputObject")
class SetPreferencesInput {
    @Field(() => GraphQLJSON)
    notifications!: InputJsonValue;

    @Field(() => GraphQLJSON)
    privacySettings!: InputJsonValue;
}

export { SetPreferencesInput as SetPreferencesInput };