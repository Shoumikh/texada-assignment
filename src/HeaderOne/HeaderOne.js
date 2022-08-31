import React, { useState } from "react";
import "./HeaderOne.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import users from "../users.js";

function HeaderOne() {
  const [state, dispatch] = useStateValue();

  //finding customer name from the user.js file as the user has not input it when the sign in
  const customerName = users.map((person) => {
    if (state.user !== null) {
      if (state?.user?.email === person.email && person.email !== "") {
        return person.name;
      } else {
        return "";
      }
    }
  });
  return (
    <div className="headerOne">
      <div className="headerOne__left">
        <p>Welcome, {state.user ? customerName : "User"}</p>
      </div>
      <div className="headerOne__right">
        <a href="https://www.facebook.com/bengalsoft">
          <FacebookIcon className="headerOne__rightItem" />
        </a>
        <a href="https://www.linkedin.com/company/bengalsoftware/">
          <LinkedInIcon className="headerOne__rightItem" />
        </a>
        <a href="https://www.facebook.com/bengalsoft">
          <MailIcon className="headerOne__rightItem" />
        </a>
      </div>
    </div>
  );
}

export default HeaderOne;
