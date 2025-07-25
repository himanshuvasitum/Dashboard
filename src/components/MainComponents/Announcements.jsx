import React from "react";
import announcements from "@/ComponentData/Announcement";
import PinIcon from "../../../public/Icons/pin";

export default function Announcements() {
  const [isPin, setPin] = React.useState(false);
  const handlePinClick = () => {
    setPin((prev) => !prev);
  };
  return (
    <div>
      <div className="announcement">
        <h2>Announcement</h2>
        {announcements?.map((announcement, index) => (
          <div className="announcement-details" key={index}>
            <div className="content">
              <h3>{announcement?.message}</h3>
              <small>{announcement?.time}</small>
              <PinIcon fill={isPin ? "black" : "#B2B2B2"} />
              <h1>...</h1>
            </div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .announcement {
            border: 1px solid green;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
}
