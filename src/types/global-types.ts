export type User = {
  id: string;
  name: string;
  userName: string;
  email?: string;
  chat?: Message[];
};

export type Message = {
  id: string;
  text: string;
  date: Date;
  type: MessageType;
};

export type MessageType = "sent" | "received";
