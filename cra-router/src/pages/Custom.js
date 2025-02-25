import { useState, useActionState } from "react";

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

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    value = type === "checkbox" ? checked : value;

    const newValues = { ...values };

    if (name === "firstName" || name === "lastName") {
      newValues[name] = value.replace(/^[^a-zA-Z]$/g, "");
    } else if (name === "phone") {
      newValues[name] = value.replace(/^[^0-9]$/g, "");
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

export default function Custom() {
  const { values, errors, handleChange, handleSubmit } = useForm(
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      hear: "",
      company: "",
      help: "",
      consent: false,
    },
    {
      firstName: {
        empty: false,
        message: "",
      },
      lastName: {
        empty: false,
        message: "",
      },
      email: {
        empty: false,
        invalid: false,
        message: "",
      },

      phone: {
        empty: false,
        invalid: false,
        message: "",
      },
      consent: {
        empty: false,
        message: "",
      },
    },
    {
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      hear: false,
      company: false,
      help: false,
      consent: true,
    }
  );

  return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>first name</label>
					<input
						maxLength="50"
						type="text"
						name="firstName"
						value={values.name}
						onChange={handleChange}
						onBlur={handleChange}
					/>
					<span style={{ color: "red" }}>{errors.firstName.message}</span>
				</div>

				<div>
					<label>last name</label>
					<input
						maxLength="50"
						type="text"
						name="lastName"
						value={values.name}
						onChange={handleChange}
						onBlur={handleChange}
					/>
					<span style={{ color: "red" }}>{errors.lastName.message}</span>
				</div>

				<div>
					<label>email</label>
					<input
						maxLength="50"
						type="email"
						name="email"
						value={values.email}
						onChange={handleChange}
						onBlur={handleChange}
					/>
					<span style={{ color: "red" }}>{errors.email.message}</span>
				</div>

				<div>
					<label>phone number</label>
					<input
						type="text"
						name="phone"
						value={values.phone}
						onChange={handleChange}
						onBlur={handleChange}
					/>
					<span style={{ color: "red" }}>{errors.phone.message}</span>
				</div>

				<div>
					<label>how did you hear about us?</label>
					<input
						maxLength="50"
						type="text"
						name="hear"
						value={values.hear}
						onChange={handleChange}
						onBlur={handleChange}
					/>
				</div>

				<div>
					<label>company</label>
					<input
						maxLength="50"
						type="text"
						name="company"
						value={values.company}
						onChange={handleChange}
						onBlur={handleChange}
					/>
				</div>

				<div>
					<label>what can we help you with?</label>
					<br />
					<textarea
						maxLength="500"
						rows="5"
						cols="50"
						name="help"
						value={values.help}
						onChange={handleChange}
						onBlur={handleChange}
					/>
				</div>

				<div>
					<label>
						<input
							type="checkbox"
							name="consent"
							checked={values.consent}
							onChange={handleChange}
							onBlur={handleChange}
						/>
						I consent to the terms and conditions
					</label>

					<span style={{ color: "red" }}>{errors.consent.message}</span>
				</div>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

// function useFetch(url) {
// 	const [data, setData] = useState(null);
// 	const [mobile, setMobile] = useState(false);

// 	useEffect(() => {
// 		console.log(window.innerWidth);
// 		if (window.innerWidth < 576) {
// 			setMobile(true);
// 		} else {
// 			setMobile(false);
// 		}
// 	}, []);

// 	useEffect(() => {
// 		fetch(url)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setData(data);
// 			});
// 	}, [url]);

// 	return { data, mobile };
// }

// export default function Custom() {
// 	const { data, mobile } = useFetch(
// 		"https://jsonplaceholder.typicode.com/users"
// 	);

// 	return (
// 		<div>
// 			<ul>{data && data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
// 			<p>Fetched on a {mobile ? "mobile" : "desktop"}.</p>
// 		</div>
// 	);
// }
