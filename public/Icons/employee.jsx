import * as React from "react";

const EmployeeIcon = (width = "18px", height = "15px", fill = "#B2B2B2") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={"none"}
    viewBox="0 0 18 15"
  >
    <path
      fill={fill}
      d="M12 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M17 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M5 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M15 15v-3a6 6 0 0 0-.75-2.906A3.005 3.005 0 0 1 18 12v3zM3.75 9.094A6 6 0 0 0 3 12v3H0v-3a3 3 0 0 1 3.75-2.906"
    ></path>
    <rect width="8" height="7" x="5" y="8" fill="#B2B2B2" rx="3"></rect>
  </svg>
);

export default EmployeeIcon;
