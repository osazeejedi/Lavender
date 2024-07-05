import { SupportRequest as TSupportRequest } from "../api/supportRequest/SupportRequest";

export const SUPPORTREQUEST_TITLE_FIELD = "id";

export const SupportRequestTitle = (record: TSupportRequest): string => {
  return record.id?.toString() || String(record.id);
};
