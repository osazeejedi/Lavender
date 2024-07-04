import { ClanWhereInput } from "./ClanWhereInput";
import { ClanOrderByInput } from "./ClanOrderByInput";

export type ClanFindManyArgs = {
  where?: ClanWhereInput;
  orderBy?: Array<ClanOrderByInput>;
  skip?: number;
  take?: number;
};
