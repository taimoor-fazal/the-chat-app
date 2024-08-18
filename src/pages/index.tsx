import React, { useEffect, useState } from "react";
import CSS from "./pages.module.css";
import { friends } from "../data/sample-data";
import { Message, User } from "../types/global-types";
export default function Home() {
  const [filteredFriends, setFilteredFriends] = useState<User[]>(friends);
  const [selectedFriend, setSelectedFriend] = useState<User | null>(null);
  return (
    <div className={CSS.container}>
      <div className={CSS.body}>
        <span className={CSS.list}>
          <span className={CSS.searchFriendField}>
            <input
              className={CSS.searchTextbox}
              placeholder="Search friends"
              type="text"
              onChange={(e) => {
                const searchValue = e.target.value;
                setFilteredFriends(
                  friends.filter((friend) =>
                    friend.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  )
                );
              }}
            />
          </span>
          {filteredFriends.length === 0 && <i>No friends found</i>}

          {filteredFriends.map((friend) => (
            <FriendInfo
              setSelectedFriend={setSelectedFriend}
              key={friend.id}
              friend={friend}
              selectedFriend={selectedFriend}
            />
          ))}
        </span>

        <ConversationView friend={selectedFriend} />
      </div>
    </div>
  );
}

type FriendInfoProps = {
  friend: User;
  setSelectedFriend: (friend: User) => void;
  selectedFriend?: User | null;
};

const FriendInfo = ({
  friend,
  setSelectedFriend,
  selectedFriend,
}: FriendInfoProps) => {
  return (
    <button
      key={friend.id}
      className={CSS.chatTile}
      data-active={selectedFriend?.id === friend.id}
      onClick={() => {
        setSelectedFriend(friend);
      }}
    >
      {friend.name}
    </button>
  );
};

type ConversationViewProps = {
  friend: User | null;
};
const ConversationView = ({ friend }: ConversationViewProps) => {
  const [chat, setChat] = useState(friend?.chat || []);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setChat(friend?.chat || []);
  }, [friend]);

  if (!friend)
    return (
      <div className={CSS.noData}>
        <i>Select a friend to chat</i>
      </div>
    );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (message.trim() === "") return;
      const newMessage = {
        id: `${chat.length + 1}`,
        text: message,
        date: new Date(),
        type: "sent",
      } as Message;
      setChat([...chat, newMessage]);
      setMessage("");
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className={CSS.chatBody}>
      <span
        className={CSS.chatHeader}
      >{`${friend.name} ( ${friend.userName} )`}</span>

      {chat?.length === 0 && (
        <div className={CSS.noData}>
          <i>No messages found</i>
        </div>
      )}
      <div className={CSS.conversation}>
        {chat?.map((message) => (
          <div
            data-received={message.type === "received"}
            className={CSS.messageRow}
            key={message.id}
          >
            <span className={CSS.messageBubble}>{message.text}</span>
          </div>
        ))}
      </div>
      <textarea
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={CSS.chatBoxTextArea}
        placeholder="Type a message"
      />
    </div>
  );
};
