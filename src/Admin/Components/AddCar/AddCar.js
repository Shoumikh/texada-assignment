import React, { useState } from "react";
import { Formik } from "formik";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useHistory } from "react-router";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./AddCar.css";

const AddCar = ({ submitForm }) => {
  const history = useHistory(); //useHistory is used to change routes

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="addcar">
      {/* <Link to="/">
          <img className="addcar__logo" src={amazon_logo_black} alt="" />
        </Link> */}
      <div className="addcar__infoBox">
        <h2>Add a Car</h2>
        <form className="addcar__option" onSubmit={handleSubmit}>
          <p>Name</p>
          {/* <input
                  type="text"
                  name="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                /> */}
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && (
            <span className="login__inputFeedback">{errors.name}</span>
          )}
          <p>Model</p>
          {/* <input
                  type="text"
                  name="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                /> */}
          <input
            type="text"
            name="model"
            value={values.model}
            onChange={handleChange}
          />
          {errors.model && (
            <span className="login__inputFeedback">{errors.model}</span>
          )}
          <p>Type</p>
          {/* <input
                  type="text"
                  name="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                /> */}
          <input
            type="text"
            name="type"
            value={values.type}
            onChange={handleChange}
          />
          {errors.type && (
            <span className="login__inputFeedback">{errors.type}</span>
          )}

          {/* ---------person capacity-------------- */}
          <p>Capacity(person)</p>
          <input
            type="text"
            name="personCapacity"
            value={values.personCapacity}
            onChange={handleChange}
          />
          {errors.personCapacity && (
            <span className="login__inputFeedback">
              {errors.personCapacity}
            </span>
          )}

          {/* ---------lagage capacity-------------- */}
          <p>Lagage Capacity</p>
          <input
            type="text"
            name="bagCapacity"
            value={values.bagCapacity}
            onChange={handleChange}
          />
          {errors.bagCapacity && (
            <span className="login__inputFeedback">{errors.bagCapacity}</span>
          )}

          {/* -----------Fuel-------------- */}
          <p>Fuel Type</p>
          <input
            type="text"
            name="fuelType"
            value={values.fuelType}
            onChange={handleChange}
          />
          {errors.fuelType && (
            <span className="login__inputFeedback">{errors.fuelType}</span>
          )}

          {/* -----------Gear-------------- */}
          <p>Gear Type</p>
          <input
            type="text"
            name="gearType"
            value={values.gearType}
            onChange={handleChange}
          />
          {errors.gearType && (
            <span className="login__inputFeedback">{errors.gearType}</span>
          )}

          {/* -----------Price-------------- */}
          <p>Price</p>
          <input
            type="text"
            name="price"
            value={values.price}
            onChange={handleChange}
          />
          {errors.price && (
            <span className="login__inputFeedback">{errors.price}</span>
          )}

          <p>Image Link</p>
          <input
            type="text"
            name="image"
            value={values.image}
            onChange={handleChange}
          />
          {errors.image && (
            <span className="login__inputFeedback">{errors.image}</span>
          )}

          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
