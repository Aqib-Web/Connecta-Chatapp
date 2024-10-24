import { useState } from "react";
import "./chatList.css";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Adbul Basit</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Muhammad Aqib</span>
          <p>Why are you?</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Ritesh Kapoor</span>
          <p>What's up?</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
