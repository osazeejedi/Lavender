import { Bet as TBet } from "../api/bet/Bet";

export const BET_TITLE_FIELD = "id";

export const BetTitle = (record: TBet): string => {
  return record.id?.toString() || String(record.id);
};
