import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="login">
      {/* <Link to="/">
        <img className="login__logo" src={amazon_logo_black} alt="" />
      </Link> */}
      <h2 className="login__logo">Bengal</h2>

      <div className="login__infoBox">
        <h2>Sign-In</h2>
        <form className="login__option">
          <p>Email</p>
          <input
            type="text"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />

          <p>Password</p>
          <input
            type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>

        <div className="login__infoBottom">
          <div className="login__condition">
            <span>
              By Signing in, you agree to Bengal Car Rental's Conditions of Use
              and Privacy Notice.
            </span>
          </div>
          <div className="login__help">
            <NavigateNextIcon fontSize="small" />
            <p>Need help?</p>
          </div>
        </div>
      </div>
      <p className="login__newToAmazon">New to Bengal Car Rental?</p>
      <button className="login__buttonCreateAccount">Register</button>
    </div>
  );
}

export default SignIn;
