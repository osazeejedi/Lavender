import { UserAchievementWhereInput } from "./UserAchievementWhereInput";
import { UserAchievementOrderByInput } from "./UserAchievementOrderByInput";

export type UserAchievementFindManyArgs = {
  where?: UserAchievementWhereInput;
  orderBy?: Array<UserAchievementOrderByInput>;
  skip?: number;
  take?: number;
};
