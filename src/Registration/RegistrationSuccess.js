import React, { useState } from "react";
import Home from "../../../src/Home/Home";
import Registration from "./Registration";

function RegistrationSuccess() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>{!isSubmitted ? <Registration submitForm={submitForm} /> : <Home />}</>
  );
}

export default RegistrationSuccess;
