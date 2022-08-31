import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import AddIcon from "@material-ui/icons/Add";


import { useHistory } from "react-router";
import "./Sidebar.css";

const Sidebar = () => {
  const history = useHistory();
  return (
    <div className="sidebar">
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          history.push(itemId);
        }}
        items={[
          {
            title: "Dashboard",
            itemId: "/dashboard",
            // you can use your own custom Icon component as well
            // icon is optional
            // elemBefore: () => <Icon name="inbox" />,
          },
          {
            title: "Car Information",
            itemId: "/carinfo",
            elemBefore: () => <DriveEtaIcon />,
            subNav: [
              {
                title: "Add Car",
                itemId: "/carInfo/addcar",
                elemBefore: () => <AddIcon />,
              },
              {
                title: "Total Cars",
                itemId: "/carinfo/totalcars",
              },
            ],
          },
          {
            title: "Order Details",
            itemId: "/orderinfo",
            elemBefore: () => <BorderColorIcon />,
            subNav: [
              {
                title: "Orders",
                itemId: "/admin/orders",

              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
