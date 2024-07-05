import { Injectable } from "@nestjs/common";
import { BetOnGameRoomInput } from "../gameRoomApIs/BetOnGameRoomInput";
import { CreateEsportsGameRoomInput } from "../gameRoomApIs/CreateEsportsGameRoomInput";

@Injectable()
export class GameRoomApIsService {
  constructor() {}
  async BetOnGameRoom(args: BetOnGameRoomInput): Promise<BetOnGameRoomInput> {
    throw new Error("Not implemented");
  }
  async CreateEsportsGameRoom(args: CreateEsportsGameRoomInput): Promise<CreateEsportsGameRoomInput> {
    throw new Error("Not implemented");
  }
  async GetEsportsGameRooms(args: string): Promise<CreateEsportsGameRoomInput[]> {
    throw new Error("Not implemented");
  }
}
