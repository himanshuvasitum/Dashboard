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
              <PinIcon fill={isPin ? "black" : "#B2B2B2"} />
              <button className="threedots">...</button>
            </div>
            <small>{announcement?.time}</small>
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
          .content {
            display: flex;
          }
          button {
            background: none; /* Removes any background color */
            color: inherit; /* Inherits text color from parent */
            border: none; /* Removes the default border */
            padding: 0; /* Removes any default padding */
            font: inherit; /* Inherits font styles from parent */
            cursor: pointer; /* Ensures the cursor remains a pointer on hover */
            outline: none; /* Removes the outline that appears on focus (consider accessibility implications) */
          }
        `}
      </style>
    </div>
  );
}
