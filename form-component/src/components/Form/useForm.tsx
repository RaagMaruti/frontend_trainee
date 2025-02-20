import { useState } from "react";

export default function useForm(initialValues, initialErrors, initialRequired) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  console.log(values);

  const validateField = (name: any, value: any) => {
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
    } else if (name === "phone" && !/^.{8,15}$/.test(value)) {
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
    name,
    value,
    type,
    checked,
  }: {
    name: string;
    value: string | boolean | undefined;
    type?: string;
    checked?: boolean;
  }) => {
    value = type === "checkbox" ? checked : value;
    console.log(name, value);
    const newValues = { ...values };

    if (
      typeof value === "string" &&
      (name === "firstName" || name === "lastName")
    ) {
      newValues[name] = value.replace(/^[^a-zA-Z]$/g, "");
    } else if (name) {
      newValues[name] = value;
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

    setErrors(newErrors);
    console.log("values", values);
    console.log("errors", newErrors);

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
    } else {
      alert("Form Incomplete!");
    }
  };

  return { values, errors, handleChange, handleSubmit, setValues };
}
