import React, { useState } from "react";
import DashboardIcon from "../../../public/Icons/dashboard";
import RecruitmentIcon from "../../../public/Icons/recruitment";
import ScheduleIcon from "../../../public/Icons/schedule";
import EmployeeIcon from "../../../public/Icons/employee";
import DepartmentIcon from "../../../public/Icons/department";
import SupportIcon from "../../../public/Icons/support";
import SettingIcon from "../../../public/Icons/settings";
const MenuBarContainer = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <>
      <div className="menu-bar-container">
        <img src="/Vasitum Logo.svg" alt="Logo" className="logo" />
        <h2>MAIN MENU</h2>
        <ul>
          <li className="sider-text">
            <button>
              <DashboardIcon
                fill={isActive ? "#FF5151" : "#B2B2B2"}
                width="24"
              />
            </button>
            Dashboard
          </li>
          <li>
            <button>
              <RecruitmentIcon fill={isActive ? "#FF5151" : "#B2B2B2"} />
            </button>
            Recruitment
          </li>
          <li>
            <button>
              <ScheduleIcon fill={isActive ? "#FF5151" : "#B2B2B2"} />
            </button>
            Schedule
          </li>
          <li>
            <button>
              <EmployeeIcon fill={isActive ? "#FF5151" : "#B2B2B2"} />
            </button>
            Employee
          </li>
          <li>
            <button>
              <DepartmentIcon fill={isActive ? "#FF5151" : "#B2B2B2"} />
            </button>
            Department
          </li>
        </ul>
        <h2>OTHER</h2>
        <ul>
          <li>
            <button>
              <SupportIcon fill={isActive ? "#FF5151" : "#B2B2B2"} />
            </button>
            Support
          </li>
          <li>
            <button>
              <SettingIcon fill={isActive ? "#FF5151" : "#B2B2B2"} />
            </button>
            Settings
          </li>
        </ul>
      </div>
      <style jsx>{`
        * {
          padding: none;
          margin: none;
        }
        .menu-bar-container {
          display: flex;
          flex-direction: column;
          width: 242px;
          height: 100vh;
          background-color: white;
          padding: 0px;
          position: fixed;
          left: 0;
          z-index: 2;
          border: 1px solid #e0e0e0;
        }
        .logo {
          width: 100px;
          margin-bottom: 20px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin: 10px 0;
        }
        img {
          margin-right: 10px;
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

        .sider-text {
          font-family: Poppins;
          font-weight: 500;
          font-style: Medium;
          font-size: 16px;
          leading-trim: NONE;
          line-height: 24px;
          letter-spacing: 0%;
        }
      `}</style>
    </>
  );
};
export default MenuBarContainer;
