import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import users from "../users";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [state, dispatch] = useStateValue();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    let userExist = false;

    if (
      errors.username !== undefined ||
      errors.email !== undefined ||
      errors.password !== undefined
      //   ||
      //   errors.phone !== ""
    ) {
      alert(("email ", errors.email));
      alert(("password ", errors.password));
      setErrors(errors);
    } else {
      //checks for if the user has already Registered?
      users.map((user) => {
        if (user.email === values.email) {
          alert("You have already Registered. Please Login");
          userExist = true;
        }
      });

      if (userExist === false) {
        //move to home page
        history.push("/");

        //adds the user in the array
        users.push({
          _id: users.length + 1,
          name: values.username,
          email: values.email,
          password: values.password,
          phone: "",
          isAdmin: false,
        });

        //checks for the user and dispaches the user to reducer
        dispatch({
          type: "SET_USER",
          user: {
            email: values.email,
            password: values.password,
            isAdmin: "false",
          },
        });
      }
    }
  };
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
