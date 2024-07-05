import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TournamentServiceBase } from "./base/tournament.service.base";

@Injectable()
export class TournamentService extends TournamentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
