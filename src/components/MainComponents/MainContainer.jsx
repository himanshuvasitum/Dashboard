import React from "react";
import Schedules from "./Schedules";
import Announcements from "./Announcements";
import Cards from "./cards";
import RecentActivity from "./RecentActivity";

export default function MainContainer() {
  return (
    <>
      <div className="main-container">
        <h1>Dashboard</h1>
        <Cards />
        <Announcements />
        <RecentActivity />
        <Schedules />
      </div>
      <style jsx>
        {`
          .main-container {
            padding-left: 240px;
            padding-top: 40px;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
