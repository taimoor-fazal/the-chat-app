import React from "react";
import CSS from "./pages.module.css";
export default function Home() {
  return (
    <div className={CSS.container}>
      <div className={CSS.body}>
        <span className={CSS.list}>
          <span className={CSS.chatTile}>Chat 1</span>
          <span className={CSS.chatTile}>Chat 2</span>
          <span className={CSS.chatTile}>Chat 3</span>
          <span className={CSS.chatTile}>Chat 4</span>
          <span className={CSS.chatTile}>Chat 5</span>
          <span className={CSS.chatTile}>Chat 6</span>
          <span className={CSS.chatTile}>Chat 7</span>
          <span className={CSS.chatTile}>Chat 1</span>
          <span className={CSS.chatTile}>Chat 2</span>
          <span className={CSS.chatTile}>Chat 3</span>
          <span className={CSS.chatTile}>Chat 4</span>
          <span className={CSS.chatTile}>Chat 5</span>
          <span className={CSS.chatTile}>Chat 6</span>
          <span className={CSS.chatTile}>Chat 6</span>
          <span className={CSS.chatTile}>Chat 4</span>
          <span className={CSS.chatTile}>Chat 5</span>
          <span className={CSS.chatTile}>Chat 6</span>
          <span className={CSS.chatTile}>Chat 6</span>
        </span>
        <span className={CSS.chatBody}>Expanded chats</span>
      </div>
    </div>
  );
}
