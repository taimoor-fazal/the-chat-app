export type User = {
  id: string;
  name: string;
  userName: string;
  email?: string;
};

export type Message = {
  id: string;
  text: string;
  date: Date;
  type: MessageType;
};

export type Conversation = {
  user: User;
  messages: Message[];
};

export type MessageType = "sent" | "received";
