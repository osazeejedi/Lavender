import { Bet as TBet } from "../api/bet/Bet";

export const BET_TITLE_FIELD = "bettingAppUser";

export const BetTitle = (record: TBet): string => {
  return record.bettingAppUser?.toString() || String(record.id);
};
