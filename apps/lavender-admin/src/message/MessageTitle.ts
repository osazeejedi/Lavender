import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "messageGameRoom";

export const MessageTitle = (record: TMessage): string => {
  return record.messageGameRoom?.toString() || String(record.id);
};
