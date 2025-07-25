import React from "react";

export default function RecentActivity() {
  return (
    <div>
      <div className="Recent-Activity">
        <div className="recent_head">Recent Activity</div>
        <div>
          <p className="small-font">10.40 AM, Fri 10 Sept 2021</p>
          <h2>You Posted a new Job</h2>
          <p>
            Kindly check the requirements and terms of work and make sure
            everything is right.
          </p>
          <div className="watch-activity">
            <p>Today you make 12 activity</p>
            <button className="see-activity">See all Activity</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .Recent-Activity{
            border: 1px solid black; 
            animation: mymove 5s infinite;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            background-color: #161E54;
            color: white;
        }
            .small-font{
            font-size:10px;
            color:#FFFFFF;
            }
            .watch-activity{
            display: flex;}
            .see-activity{
            background-color: #FF5151;
            }

            .recent_head{
            font-size: 18px;
            height: 48px;
            background-color: #1B204A;
            width: 100%;
            }
        @keyframes mymove {
            from {border-color: red;}
            to {border-color: blue;}
      `}</style>
    </div>
  );
}
