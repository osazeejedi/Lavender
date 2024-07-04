import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TournamentWhereInput = {
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  tournamentDescription?: StringNullableFilter;
  tournamentEndDate?: DateTimeNullableFilter;
  tournamentName?: StringNullableFilter;
  tournamentStartDate?: DateTimeNullableFilter;
};
