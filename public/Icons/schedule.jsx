import * as React from "react";

const ScheduleIcon = (width = "16px", height = "18px", fill = "#B2B2B2") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={"none"}
    viewBox="0 0 16 18"
  >
    <path
      fill={fill}
      d="M14.222 1.8h-1.778V0h-1.777v1.8H5.333V0H3.556v1.8H1.778A1.79 1.79 0 0 0 0 3.6v12.6c0 .993.797 1.8 1.778 1.8h12.444A1.79 1.79 0 0 0 16 16.2V3.6c0-.993-.797-1.8-1.778-1.8m-.889 13.5H8V9.9h5.333zm.89-9H1.777V4.5h12.444z"
    ></path>
  </svg>
);

export default ScheduleIcon;
