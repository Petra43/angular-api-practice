export type UserMessage = {
  message: string;
  type: MessageType;
};

export type MessageType = 'info' | 'error' | 'success' | 'warning';
