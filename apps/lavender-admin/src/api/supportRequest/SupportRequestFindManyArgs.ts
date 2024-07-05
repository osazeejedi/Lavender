import { SupportRequestWhereInput } from "./SupportRequestWhereInput";
import { SupportRequestOrderByInput } from "./SupportRequestOrderByInput";

export type SupportRequestFindManyArgs = {
  where?: SupportRequestWhereInput;
  orderBy?: Array<SupportRequestOrderByInput>;
  skip?: number;
  take?: number;
};
