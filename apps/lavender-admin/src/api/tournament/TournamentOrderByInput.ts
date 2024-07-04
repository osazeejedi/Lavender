import { SortOrder } from "../../util/SortOrder";

export type TournamentOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  startDate?: SortOrder;
  tournamentDescription?: SortOrder;
  tournamentEndDate?: SortOrder;
  tournamentName?: SortOrder;
  tournamentStartDate?: SortOrder;
  updatedAt?: SortOrder;
};
