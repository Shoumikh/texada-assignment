import { number } from "yup";

export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "name required";
  }
  //else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //     errors.name = "Enter a valid name";
  //   }

  if (!values.model) {
    errors.model = "Model required";
    //   } else if (!/\S+@\S+\.\S+/.test(values.model)) {
    //     errors.model = "model address is invalid";
  }
  if (!values.type) {
    errors.type = "Type required";
    //   } else if (!/\S+@\S+\.\S+/.test(values.model)) {
    //     errors.model = "model address is invalid";
  }
  if (!values.personCapacity) {
    errors.personCapacity = "Capacity required";
    //   } else if (!/\S+@\S+\.\S+/.test(values.model)) {
    //     errors.model = "model address is invalid";
  }
  if (!values.bagCapacity) {
    errors.bagCapacity = "Lagage Capcity required";
    //   } else if (!/\S+@\S+\.\S+/.test(values.model)) {
    //     errors.model = "model address is invalid";
    //   } else if (typeof values.bagCapacity === "number") {
    //     //     errors.model = "Lagage Capacity must be a number";
  }
  if (!values.fuelType) {
    errors.fuelType = "Fuel type required";
    //   } else if (!/\S+@\S+\.\S+/.test(values.model)) {
    //     errors.model = "model address is invalid";
  }
  if (!values.gearType) {
    errors.gearType = "Gear type required";
    //   } else if (!/\S+@\S+\.\S+/.test(values.model)) {
    //     errors.model = "model address is invalid";
  }
  if (!values.price) {
    errors.price = "Price required";
    //   } else if (!/\S+@\S+\.\S+/.test(values.model)) {
    //     errors.model = "model address is invalid";
  }
  if (!values.image) {
    errors.image = "Image Link required";
    //   } else if (!/\S+@\S+\.\S+/.test(values.model)) {
    //     errors.model = "model address is invalid";
  }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 6) {
  //     errors.password = "Password needs to be 6 characters or more";
  //   }

  //   if (!values.phone) {
  //     errors.phone = "Phone Number is required";
  //   }
  //   //   if (!values.password2) {
  //   //     errors.password2 = "Password is required";
  //   //   } else if (values.password2 !== values.password) {
  //   //     errors.password2 = "Passwords do not match";
  //   //   }
  return errors;
}
