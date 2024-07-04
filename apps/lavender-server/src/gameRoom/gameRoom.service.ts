import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameRoomServiceBase } from "./base/gameRoom.service.base";

@Injectable()
export class GameRoomService extends GameRoomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
