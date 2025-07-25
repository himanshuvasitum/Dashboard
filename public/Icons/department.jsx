import * as React from "react";

const DepartmentIcon = (width = "18px", height = "18px", fill = "#B2B2B2") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={"none"}
    viewBox="0 0 18 18"
  >
    <path
      fill={fill}
      d="M9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9M5.4 13.95a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5M6.75 5.4a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m5.85 8.55a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5"
    ></path>
  </svg>
);

export default DepartmentIcon;
