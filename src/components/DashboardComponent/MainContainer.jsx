import React from "react";
import basicStats from "@/ComponentData/dashboardstats1";
import overallStats from "@/ComponentData/dashboardstats2";
import announcements from "@/ComponentData/Announcement";
import PinIcon from "../../../public/Icons/pin";

export default function MainContainer() {
  const [isPin, setPin] = React.useState(false);
  const handlePinClick = () => {
    setPin((prev) => !prev);
  };
  return (
    <>
      <div className="main-container">
        <h1>Dashboard</h1>
        <div className="dashboard-cards">
          {basicStats?.map((stat, index) => (
            <div className="card" key={index}>
              <h2>{stat?.title}</h2>
              <p>{stat?.value}</p>
              <p>{stat?.description}</p>
            </div>
          ))}
          <div className="bigCards">
            {overallStats?.map((stats) => {
              return (
                <div className="bigCard">
                  <div>
                    <h2>{stats?.title}</h2>
                    <p>{stats?.value}</p>
                    <small>{stats?.men}</small>
                    <small>{stats?.women}</small>
                  </div>
                  <div className="graph">
                    <img src={stats?.img.src} alt="graph" />
                    <p>{stats?.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="announcement">
          {announcements?.map((announcement, index) => (
            <div className="announcement-details" key={index}>
              <div className="content">
                <h3>{announcement?.title}</h3>
                <small>{announcement?.date}</small>
              </div>
              <div>
                <PinIcon fill={isPin ? "black" : "#B2B2B2"} />
                <h1>...</h1>
              </div>
            </div>
          ))}
        </div>

        <div className="Recent Activity">
          <h2>Recent Activity</h2>
          <div>
            <p>10.40 AM, Fri 10 Sept 2021</p>
            <h2>You Posted a new Job</h2>
            <p>
              Kindly check the requirements and terms of work and make sure
              everything is right.
            </p>
            <div>
              <p>Today you make 12 activity</p>
              <button>See all Activity</button>
            </div>
          </div>
          <div className="Schedules">
            <h1>Upcoming Schedules</h1>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .main-container {
            // background-color: green;
            padding-left: 240px;
            padding-top: 40px;
            display: flex;
          }
        `}
      </style>
    </>
  );
}
