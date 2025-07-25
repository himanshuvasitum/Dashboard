import React from "react";
import priority from "../../ComponentData/ScheduleData/priority";
import others from "../../ComponentData/ScheduleData/others";
export default function Schedules() {
  function getDate() {
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
          <h1>Upcoming Schedules</h1>
          <p>{getDate()}</p>
          <div className="prioritySchedule">
            <div>
              <p>Priority</p>
              {priority.map((prioritydata, index) => (
                <>
                  <h3>{prioritydata.text}</h3>
                  <p>
                    {prioritydata.day}
                    {prioritydata.time}
                  </p>
                </>
              ))}
            </div>
          </div>
          <div>
            <p>Others</p>
            {others.map((otherdata, index) => (
              <div>
                <h3>{otherdata.text}</h3>
                <p>
                  {otherdata.day}
                  {otherdata.time}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button className="createSchedule">Create a new Schedule</button>
      </div>
      <style jsx>
        {`
            .createSchedule {
                color: #ff5151;
            }
            .Schedules{
                border: 1px dotted black;
            }
        `}
      </style>
    </div>
  );
}
