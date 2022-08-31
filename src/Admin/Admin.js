import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import AddIcon from "@material-ui/icons/Add";
import "./Admin.css";
import { useHistory } from "react-router";
import Sidebar from "./Components/Sidebar";
import CarTable from "./Components/CarTable";

const Admin = () => {
  return (
    <div className="admin">
      <div className="admin__container">
        <div className="admin__sidebar">
          <Sidebar />
        </div>
        <div className="admin__carTable">
          <CarTable />
        </div>
      </div>
    </div>
  );
};

export default Admin;
