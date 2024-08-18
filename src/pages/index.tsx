import React, { useState } from "react";
import CSS from "./pages.module.css";
import { friends } from "../data/sample-data";
import { User } from "../types/global-types";
export default function Home() {
  const [filteredFriends, setFilteredFriends] = useState<User[]>(friends);
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
            <FriendInfo key={friend.id} friend={friend} />
          ))}
        </span>
        <span className={CSS.chatBody}>
          <textarea
            className={CSS.chatBoxTextArea}
            placeholder="Type a message"
          />
        </span>
      </div>
    </div>
  );
}

const FriendInfo = ({ friend }: { friend: User }) => {
  return (
    <span key={friend.id} className={CSS.chatTile}>
      {friend.name}
    </span>
  );
};
