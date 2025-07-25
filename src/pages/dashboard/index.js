import MainContainer from "@/components/MainComponents/MainContainer";
import MenuBarContainer from "@/components/DashboardComponent/MenuBarContainer";
import Navbar from "@/components/DashboardComponent/NavbarContainer";
const dashboard = () => {
  return (
    <>
      <Navbar />
      <MenuBarContainer />
      <MainContainer />
    </>
  );
};
export default dashboard;
