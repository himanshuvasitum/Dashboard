import React from "react";

export default function RecentActivity() {
  return (
    <div>
      <div className="Recent-Activity">
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
      </div>
      <style jsx>{`
        .Recent-Activity{
            border: 1px solid black; 
            animation: mymove 5s infinite;
            display: flex;
        }
        @keyframes mymove {
            from {border-color: red;}
            to {border-color: blue;}
      `}</style>
    </div>
  );
}
