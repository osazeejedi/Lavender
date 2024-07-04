import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("UploadProfilePictureInputObject")
class UploadProfilePictureInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    profilePicture!: string;
}

export { UploadProfilePictureInput as UploadProfilePictureInput };