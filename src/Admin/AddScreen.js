import React from "react";
import AddCar from "./Components/AddCar/AddCar";
import Sidebar from "./Components/Sidebar";
import "./AddScreen.css";

const AddScreen = () => {
  return (
    <div className="addScreen">
      <div className="addScreen__container">
        <div className="addScreen__left">
          <Sidebar />
        </div>
        <div className="addScreen__right">
          <AddCar />
        </div>
      </div>
    </div>
  );
};

export default AddScreen;
