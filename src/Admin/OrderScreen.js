import React from "react";
import Sidebar from "./Components/Sidebar";
import OrderTable from "./Components/OrderTable";
import "./OrderScreen.css";

const OrderScreen = () => {
  return (
    <div className="orderScreen">
      <div className="orderScreen__container">
        <div className="orderSceen__left">
          <Sidebar />
        </div>
        <div className="orderScreen__right">
          <OrderTable />
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
