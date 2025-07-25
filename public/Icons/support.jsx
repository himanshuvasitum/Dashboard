import * as React from "react";

const SupportIcon = (width = "18px", height = "18px", fill = "#B2B2B2") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={"none"}
    viewBox="0 0 18 18"
  >
    <path
      fill={fill}
      d="M9 0C4.037 0 0 4.037 0 9v3.729C0 13.65.807 14.4 1.8 14.4h.9a.9.9 0 0 0 .9-.9V8.871a.9.9 0 0 0-.9-.9h-.817C2.383 4.488 5.38 1.8 9 1.8s6.617 2.688 7.117 6.171H15.3a.9.9 0 0 0-.9.9V14.4c0 .993-.807 1.8-1.8 1.8h-1.8v-.9H7.2V18h5.4c1.985 0 3.6-1.615 3.6-3.6.993 0 1.8-.75 1.8-1.671V9c0-4.963-4.037-9-9-9"
    ></path>
  </svg>
);

export default SupportIcon;
