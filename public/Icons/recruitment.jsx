import React, { useState } from "react";

const RecruitmentIcon = (width = "18px", height = "16px", fill = "#B2B2B2") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 18 16"
  >
    <path fill={fill} d="M2 4a4 4 0 1 0 8 0 4 4 0 0 0-8 0"></path>
    <rect width="12" height="6" y="10" fill="#B2B2B2" rx="3"></rect>
    <path
      fill={"#B2B2B2"}
      fillRule="evenodd"
      d="M16 4h-2v2h-2v2h2v2h2V8h2V6h-2z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default RecruitmentIcon;
