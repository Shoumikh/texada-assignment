import React, { useState } from "react";
import "./Registration.css";
import { Formik } from "formik";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useHistory } from "react-router";
import useForm from "./useForm";
import validate from "./validateInfo";

const Registration = ({ submitForm }) => {
  const history = useHistory(); //useHistory is used to change routes

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="registration">
      {/* <Link to="/">
        <img className="registration__logo" src={amazon_logo_black} alt="" />
      </Link> */}
      <h2 className="registration__logo">Bengal</h2>

      <div className="registration__infoBox">
        <h2>Register</h2>
        <form className="registration__option" onSubmit={handleSubmit}>
          <p>Name</p>
          {/* <input
                type="text"
                name="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              /> */}
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && (
            <p className="login__inputFeedback">{errors.username}</p>
          )}
          <p>Email</p>
          {/* <input
                type="text"
                name="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              /> */}
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="login__inputFeedback">{errors.email}</p>
          )}

          <p>Password</p>
          {/* <input
                type="password"
                name="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              /> */}

          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="login__inputFeedback">{errors.password}</p>
          )}

          <p>Phone Number</p>
          <PhoneInput
            className="registration__phone"
            international
            defaultCountry="BD"
            value={values.password}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="login__inputFeedback">{errors.phone}</p>
          )}

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
