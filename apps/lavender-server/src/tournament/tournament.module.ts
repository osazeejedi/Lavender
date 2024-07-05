import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TournamentModuleBase } from "./base/tournament.module.base";
import { TournamentService } from "./tournament.service";
import { TournamentController } from "./tournament.controller";
import { TournamentResolver } from "./tournament.resolver";

@Module({
  imports: [TournamentModuleBase, forwardRef(() => AuthModule)],
  controllers: [TournamentController],
  providers: [TournamentService, TournamentResolver],
  exports: [TournamentService],
})
export class TournamentModule {}
