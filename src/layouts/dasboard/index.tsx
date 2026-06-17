import { Outlet } from "react-router-dom";
import NavBar from "../navbar";
import "./index.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <NavBar />
      <Outlet />
    </div>
  );
};
export default Dashboard;
