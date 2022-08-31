// import { useState, useEffect } from "react";

// const useForm = (callback, validate) => {
//   const [values, setValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     password2: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setErrors(validate(values));
//     setIsSubmitting(true);
//   };

//   useEffect(() => {
//     if (Object.keys(errors).length === 0 && isSubmitting) {
//       callback();
//     }
//   }, [errors]);

//   return { handleChange, handleSubmit, values, errors };
// };

// export default useForm;

import { ErrorSharp } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import users from "../users";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, dispatch] = useStateValue();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate(values);
    let isUser = false;

    // checks for validation
    if (errors.email !== undefined) {
      alert(("email ", errors.email));
      setErrors(errors);
    } else {
      // if valid email then checks if the user exists in the array
      users.map((user) => {
        if (user.email === values.email && user.password === values.password) {
          history.push("/");
          isUser = true;
          dispatch({
            type: "SET_USER",
            user: {
              email: values.email,
              password: values.password,
              isAdmin: user.isAdmin,
            },
          });
        }
      });
      // if user does not exist then alerts with info
      if (isUser === false) {
        alert("Invalid Email and Password");
      }
      console.log("pass", errors.password);
    }
  };

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
