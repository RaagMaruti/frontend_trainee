import { useState, useEffect } from "react";

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

function useFormHandler(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    if (!value) {
      error = "required field";
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      error = "invalid email address";
    } else if (name === "phone" && !/^[0-9]{8,15}$/.test(value)) {
      error = "invalid phone number";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === "checkbox" ? checked : value;

    if (name === "firstName" || name === "lastName") {
      newValue = value.replace(/^[^a-zA-Z]$/g, "");
    } else if (name === "phone") {
      newValue = value.replace(/^[^0-9]$/g, "");
    }

    setValues((prev) => ({ ...prev, [name]: newValue }));
    validateField(name, newValue);
  };

  const validateForm = () => {
    const newErrors = {};

    Object.entries(values).forEach(([key, value]) => {
      validateField(key, value);
      if (!value) {
        newErrors[key] = "required field";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted Successfully!", data);
      alert("Form Submitted Successfully!");
    }
  };

  return { values, errors, handleChange, handleSubmit };
}

export default function Custom() {
  const { values, errors, handleChange, handleSubmit } = useFormHandler({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hear: "",
    company: "",
    help: "",
    consent: false,
  });

  return (
    <div>
      <form onSubmit={handleSubmit()}>
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
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
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
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
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
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
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
          {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
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
          {errors.hear && <span style={{ color: "red" }}>{errors.hear}</span>}
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
          {errors.company && (
            <span style={{ color: "red" }}>{errors.company}</span>
          )}
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
          {errors.help && <span style={{ color: "red" }}>{errors.help}</span>}
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
          {errors.consent && (
            <span style={{ color: "red" }}>{errors.consent}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
