import basicStats from "@/ComponentData/dashboardstats1";
import overallStats from "@/ComponentData/dashboardstats2";
import React from "react";

export default function Cards() {
  return (
    <div>
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
      <style jsx>
        {`
          .dashboard-cards {
            border: 1px solid black;
            display: flex;
          }
          .card {
            width: 204;
            height: 136;
            border-radius: 10px;
            padding: 12px 12px 12px 20px;
            gap: 16px;
            opacity: 1;
            border: 1px solid black;
            background: #ffefe7;
          }
        `}
      </style>
    </div>
  );
}
