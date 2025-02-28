import { useState } from "react";

export default function useForm(initialValues, initialErrors, initialRequired) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [errorMessages, setErrorMessages] = useState({
    empty: "",
    invalid: "",
  });

  const constructErrorMessages = (newErrors) => {
    const newErrorMessages = { ...errorMessages };
    if (
      newErrors.firstName.empty ||
      newErrors.lastName.empty ||
      newErrors.emailAddress.empty ||
      newErrors.phoneNumber.empty ||
      newErrors.consent.empty
    ) {
      newErrorMessages.empty = "Please fill mandatory fields*";
    } else {
      newErrorMessages.empty = "";
    }

    if (newErrors.emailAddress.invalid && newErrors.phoneNumber.invalid) {
      newErrorMessages.invalid = "Please enter valid Email ID and Phone Number";
    } else if (newErrors.emailAddress.invalid) {
      newErrorMessages.invalid = "Please enter a valid Email ID";
    } else if (newErrors.phoneNumber.invalid) {
      newErrorMessages.invalid = "Please enter a valid Phone Number";
    } else {
      newErrorMessages.invalid = "";
    }

    setErrorMessages(newErrorMessages);
  };

  const validateField = (name: any, value: any) => {
    const newErrors = { ...errors };

    if (!value) {
      newErrors[name] = {
        empty: true,
        invalid: false,
      };
    } else if (name === "emailAddress" && !/\S+@\S+\.\S+/.test(value)) {
      newErrors[name] = {
        empty: false,
        invalid: true,
      };
    } else if (name === "phoneNumber" && !/.{8,15}/.test(value)) {
      newErrors[name] = {
        empty: false,
        invalid: true,
      };
    } else {
      newErrors[name] = initialErrors[name];
    }

    setErrors(newErrors);
    constructErrorMessages(newErrors);
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
    value = type === "checkbox" ? checked : value;
    const newValues = { ...values };

    if (
      typeof value === "string" &&
      (name === "firstName" || name === "lastName")
    ) {
      newValues[name] = value.replace(/[^a-zA-Z0-9]/g, "");
    } else {
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
        };
      }
    }

    setErrors(newErrors);
    constructErrorMessages(newErrors);

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
      setValues(initialValues);
      setErrors(initialErrors);
      alert("Form Submitted Successfully!");
    }
  };

  return { values, errors, errorMessages, handleChange, handleSubmit };
}
