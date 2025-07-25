const DashboardIcon = ({ width = "18px", height = "18px", fill = "#666" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={"none"}
    viewBox="0 0 18 18"
  >
    <path
      fill={fill}
      d="M0 10h8V0H0zm0 8h8v-6H0zm10 0h8V8h-8zm0-18v6h8V0z"
    ></path>
  </svg>
);

export default DashboardIcon;
