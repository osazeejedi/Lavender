import * as graphql from "@nestjs/graphql";
import { BetOnGameRoomInput } from "../gameRoomApIs/BetOnGameRoomInput";
import { CreateEsportsGameRoomInput } from "../gameRoomApIs/CreateEsportsGameRoomInput";
import { GameRoomApIsService } from "./gameroomapis.service";

export class GameRoomApIsResolver {
  constructor(protected readonly service: GameRoomApIsService) {}

  @graphql.Mutation(() => BetOnGameRoomInput)
  async BetOnGameRoom(
    @graphql.Args()
    args: BetOnGameRoomInput
  ): Promise<BetOnGameRoomInput> {
    return this.service.BetOnGameRoom(args);
  }

  @graphql.Mutation(() => CreateEsportsGameRoomInput)
  async CreateEsportsGameRoom(
    @graphql.Args()
    args: CreateEsportsGameRoomInput
  ): Promise<CreateEsportsGameRoomInput> {
    return this.service.CreateEsportsGameRoom(args);
  }

  @graphql.Query(() => [CreateEsportsGameRoomInput])
  async GetEsportsGameRooms(
    @graphql.Args()
    args: string
  ): Promise<CreateEsportsGameRoomInput[]> {
    return this.service.GetEsportsGameRooms(args);
  }
}
