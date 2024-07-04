import { Clan as TClan } from "../api/clan/Clan";

export const CLAN_TITLE_FIELD = "clanName";

export const ClanTitle = (record: TClan): string => {
  return record.clanName?.toString() || String(record.id);
};
