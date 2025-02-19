import { useState } from "react";

function useForm(initialValues, initialErrors, initialRequired) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    if (!value) {
      newErrors[name] = {
        empty: true,
        invalid: false,
        message: "required field",
      };
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      newErrors[name] = {
        empty: false,
        invalid: true,
        message: "invalid email address",
      };
    } else if (name === "phone" && !/^[0-9]{8,15}$/.test(value)) {
      newErrors[name] = {
        empty: false,
        invalid: true,
        message: "invalid phone number",
      };
    } else {
      newErrors[name] = initialErrors[name];
    }

    setErrors(newErrors);
  };

  const handleChange = ({
    name = "",
    value = "",
    type = "",
    checked = false,
  }: {
    name: string;
    value: any;
    type?: string;
    checked?: boolean;
  }) => {
    // let { name, value, type, checked } = e.target;
    value = type === "checkbox" ? checked : value;

    const newValues = { ...values };

    if (value) {
      if (name === "firstName" || name === "lastName") {
        newValues[name] = value.replace(/^[^a-zA-Z]$/g, "");
      } else if (name === "phone") {
        newValues[name] = value.replace(/^[^0-9]$/g, "");
      } else {
        newValues[name] = value;
      }
    }

    setValues(newValues);

    if (name in errors) {
      validateField(name, value);
    }
  };

  const validateForm = () => {
    const newErrors = { ...errors };

    for (let i in initialRequired) {
      if (initialRequired[i] && !values[i]) {
        newErrors[i] = {
          empty: true,
          message: "required field",
        };
      }
    }

    console.log("errors", newErrors);
    setErrors(newErrors);

    for (let i in newErrors) {
      const { empty, invalid } = newErrors[i];
      if (empty || invalid) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form Submitted Successfully!");
      console.log("submit", values);
    } else {
      alert("Form Incomplete!");
    }
  };

  return { values, errors, handleChange, handleSubmit };
}

export default useForm;
