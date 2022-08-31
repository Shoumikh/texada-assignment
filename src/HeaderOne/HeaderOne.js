import React from "react";
import "./HeaderOne.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";

function HeaderOne() {
  return (
    <div className="headerOne">
      <div className="headerOne__left">
        <p>+777 2345 7886</p>
      </div>

      <div className="headerOne__right">
        <FacebookIcon className="headerOne__rightItem" />
        <TwitterIcon className="headerOne__rightItem" />
        <MailIcon className="headerOne__rightItem" />
      </div>
    </div>
  );
}

export default HeaderOne;
