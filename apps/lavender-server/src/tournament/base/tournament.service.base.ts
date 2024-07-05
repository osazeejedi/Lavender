/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Tournament as PrismaTournament } from "@prisma/client";

export class TournamentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TournamentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.tournament.count(args);
  }

  async tournaments(
    args: Prisma.TournamentFindManyArgs
  ): Promise<PrismaTournament[]> {
    return this.prisma.tournament.findMany(args);
  }
  async tournament(
    args: Prisma.TournamentFindUniqueArgs
  ): Promise<PrismaTournament | null> {
    return this.prisma.tournament.findUnique(args);
  }
  async createTournament(
    args: Prisma.TournamentCreateArgs
  ): Promise<PrismaTournament> {
    return this.prisma.tournament.create(args);
  }
  async updateTournament(
    args: Prisma.TournamentUpdateArgs
  ): Promise<PrismaTournament> {
    return this.prisma.tournament.update(args);
  }
  async deleteTournament(
    args: Prisma.TournamentDeleteArgs
  ): Promise<PrismaTournament> {
    return this.prisma.tournament.delete(args);
  }
}
