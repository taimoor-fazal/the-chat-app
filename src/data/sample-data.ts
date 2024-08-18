import { User } from "../types/global-types";

export const friends: User[] = [
  {
    id: "1",
    name: "M. Smith",
    userName: "msmith",
    chat: [
      {
        id: "1",
        text: "Hello, how are you?",
        date: new Date("2021-09-01T12:00:00"),
        type: "sent",
      },
      {
        id: "2",
        text: "I am fine, thank you. How are you?",
        date: new Date("2021-09-01T12:01:00"),
        type: "received",
      },
      {
        id: "3",
        text: "I am good too. Thanks for asking.",
        date: new Date("2021-09-01T12:02:00"),
        type: "sent",
      },
    ],
  },
  {
    id: "2",
    name: "J. Doe",
    userName: "jdoe",
    chat: [
      {
        id: "1",
        text: "Hello, are you going to the concert next week?",
        date: new Date("2021-09-01T12:00:00"),
        type: "sent",
      },
    ],
  },
  {
    id: "3",
    name: "A. Johnson",
    userName: "ajohnson",
    chat: [
      {
        id: "1",
        text: "Hello, Any plans for this summer?",
        date: new Date("2023-09-01T12:00:00"),
        type: "sent",
      },
      {
        id: "2",
        text: "Yes, my parents are visitng us this summer",
        date: new Date("2023-09-01T12:10:00"),
        type: "received",
      },
      {
        id: "3",
        text: "That's great! I hope you have a good time",
        date: new Date("2023-09-01T12:15:00"),
        type: "sent",
      },
    ],
  },
  {
    id: "4",
    name: "M. Johnson",
    userName: "mjohnson",
  },
  {
    id: "5",
    name: "J. Smith",
    userName: "jsmith",
  },
  {
    id: "6",
    name: "M. Ali",
    userName: "mali",
  },
  { id: "7", name: "M. Khan", userName: "mkhan" },
];
