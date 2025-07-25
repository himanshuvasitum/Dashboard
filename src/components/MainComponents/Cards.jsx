import basicStats from "@/ComponentData/dashboardstats1";
import overallStats from "@/ComponentData/dashboardstats2";
import React from "react";

export default function Cards() {
  return (
    <div>
      <div className="dashboard-cards">
        <div className="card flex">
          {basicStats?.map((stat, index) => (
            <div className="minicards" key={index}>
              <h2 className="card-title">{stat?.title}</h2>
              <p className="card-value">{stat?.value}</p>
              <p className="card-description">{stat?.description}</p>
            </div>
          ))}
        </div>
        <div className="bigCards">
          {overallStats?.map((stats, index) => {
            return (
              <div className="bigCard" key={index}>
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
        .flex{
        display:flex
        align-items:center;
        justify-content:center;
        }
        
          .dashboard-cards {
            display: flex;
            flex-direction: column;
          }
          .card {
            border-radius: 10px;
            background: #ffefe7;
            gap: 20px;
          }
          .bigCards {
            border-radius: 10px;
            display: flex;
            background: #ffefe7;
            flex: 1;
            border: 1px solid red;
          }
          .minicards {
            border: none;
            background-color: grey;
          }
          .card-title {
            font-size: 18px;
            font-weight: 500;
          }
          .card-value {
            font-size: 36px;
            font-weight: 500;
          }
          .card-description {
            font-size: 16px;
            font-weight: 400;
          }
        `}
      </style>
    </div>
  );
}
