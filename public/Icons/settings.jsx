import * as React from "react";

const SettingIcon = (width = "18px", height = "18px", fill = "#B2B2B2") => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={"none"}
    viewBox="0 0 18 18"
  >
    <path
      fill={fill}
      d="M10.37 18H7.094a.9.9 0 0 1-.879-.707l-.366-1.696a7.2 7.2 0 0 1-1.382-.798l-1.653.526a.9.9 0 0 1-1.053-.407L.119 12.082a.905.905 0 0 1 .174-1.116l1.282-1.17a7.3 7.3 0 0 1 0-1.594L.293 7.034a.905.905 0 0 1-.174-1.116l1.638-2.837a.9.9 0 0 1 1.053-.408l1.654.527q.33-.245.684-.45.341-.192.7-.348L6.217.708A.9.9 0 0 1 7.094 0h3.276a.9.9 0 0 1 .879.708l.37 1.695a7.4 7.4 0 0 1 1.382.798l1.654-.526a.9.9 0 0 1 1.052.408l1.638 2.837a.906.906 0 0 1-.173 1.115l-1.283 1.17c.058.53.058 1.065 0 1.595l1.283 1.17c.31.286.382.749.173 1.115l-1.638 2.838a.9.9 0 0 1-1.053.408l-1.653-.527q-.646.476-1.38.797l-.372 1.692a.9.9 0 0 1-.879.707M8.73 5.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2"
    ></path>
  </svg>
);

export default SettingIcon;
