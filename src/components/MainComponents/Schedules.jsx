import React from "react";
import priority from "../../ComponentData/ScheduleData/priority";
import others from "../../ComponentData/ScheduleData/others";

export default function Schedules() {
  function GetDate() {
    const date = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const tempMonth = date.getMonth();
    const month = monthNames[tempMonth];
    const year = date.getFullYear();
    const day = date.getDate();

    return `${day} ${month} ${year}`;
  }
  return (
    <div>
      <div className="Schedules">
        <div>
          <div className="scheduleTitle">
            <h1>Upcoming Schedules</h1>
            <p>{GetDate()}</p>
          </div>

          <div className="prioritySchedule">
            <div>
              <p>Priority</p>
              <div className="longCard">
                {priority.map((prioritydata, index) => (
                  <div key={index}>
                    <h3>{prioritydata.text}</h3>
                    <p>
                      {prioritydata.day}
                      {prioritydata.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p>Others</p>
            <div>
              {others.map((otherdata, index) => (
                <div className="longCard" key={index}>
                  <h3>{otherdata.text}</h3>
                  <p>
                    {otherdata.day}
                    {otherdata.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="createSchedule">Create a new Schedule</button>
      </div>
      <style jsx>
        {`
          .createSchedule {
            color: #ff5151;
          }
          .Schedules {
            border: 1px dotted black;
          }
          .longCard {
            background-color: #fafafa;
            border: 1px solid black;
          }
          .scheduleTitle {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
}
