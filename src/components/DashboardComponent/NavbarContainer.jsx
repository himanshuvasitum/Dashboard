import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        {/* <img src="" alt="hamburger" /> */}
        <input type="text" alt="search bar" id="myInput" />

        <button>
          <img src="notifications.svg" alt="notification" />
        </button>
        <button>
          <img src="chats.svg" alt="messages" />
        </button>
        <button>
          <img src="profile.svg" alt="profile" className="profile" />
        </button>
      </div>
      <style jsx>
        {`
          .profile {
            height: 42px;
            width: auto;
          }

          .navbar {
            padding: 0px;
            margin: 0px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: #fff;
            position: fixed;
            top: 0;
            width: 100%;
            height: 60px;
            z-index: 1;
            border-bottom: 1px solid #ccc;
          }
          img {
            width: 24px;
            height: 24px;
          }
          input {
            // flex-grow: 1;
            margin-left: 20px;
            padding: 5px;
          }
          button {
            background: none;
            border: none;
            cursor: pointer;
          }
          .profile {
            border-radius: 50%;
          }
        `}
      </style>
    </>
  );
}
