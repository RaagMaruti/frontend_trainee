"use client";

import styles from "./Form.module.css";
import useForm from "./useForm";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

export default function Form({ data }: any) {
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

  // const [formData, setFormData] = useState<{ [key: string]: any }>({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   hear: '',
  //   company: '',
  //   help: '',
  //   consent: false,
  // });

  // const [error, setError] = useState<{
  //   [key: string]: { [key: string]: boolean | null };
  // }>({
  //   firstName: { empty: null, invalid: null },
  //   lastName: { empty: null, invalid: null },
  //   email: { empty: null, invalid: null },
  //   phone: { empty: null, invalid: null },
  //   consent: { empty: null, invalid: null },
  // });

  // const handleChange = (e: any) => {
  //   let { name, value } = e.target;

  //   // error message
  //   if (value === '') {
  //     setError({ ...error, [name]: { empty: true, invalid: false } });
  //   } else {
  //     setError({ ...error, [name]: { empty: false, invalid: false } });
  //   }

  //   // only alphabets are allowed
  //   if (name === 'firstName' || name === 'lastName') {
  //     value = value.replace(/[^a-zA-Z\s]/g, '');
  //   }

  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleEmail = (e: any) => {
  //   let { name, value } = e.target;

  //   let pattern = /\S+@\S+\.\S+/;
  //   let emailTrue = pattern.test(value);

  //   if (value === '') {
  //     setError({ ...error, [name]: { empty: true, invalid: false } });
  //   } else if (!emailTrue) {
  //     setError({ ...error, [name]: { empty: false, invalid: true } });
  //   } else {
  //     setError({ ...error, [name]: { empty: false, invalid: false } });
  //   }

  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleBlurPhone = (e: any) => {
  //   const value = e.target.value;
  //   if (value) {
  //     setError({ ...error, phone: { empty: false, invalid: false } });
  //   } else {
  //     setError({ ...error, phone: { empty: true, invalid: false } });
  //   }
  // };

  // function handleChangePhone(value: string | undefined) {
  //   if (value.length > 1) {
  //     if (value.length < 8 || value.length > 15) {
  //       setError({ ...error, phone: { empty: false, invalid: true } });
  //     } else {
  //       setError({ ...error, phone: { empty: false, invalid: false } });
  //       setFormData({ ...formData, phone: value });
  //     }
  //   } else {
  //     setError({ ...error, phone: { empty: true, invalid: false } });
  //   }
  // }

  // const handleConsent = (e: any) => {
  //   let { name, checked } = e.target;

  //   if (formData.consent) {
  //     setError({ ...error, consent: { empty: true, invalid: false } });
  //   } else {
  //     setError({ ...error, consent: { empty: false, invalid: false } });
  //   }

  //   setFormData({
  //     ...formData,
  //     [name]: checked,
  //   });
  // };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   let i: string = '';
  //   const newError = { ...error };

  //   for (i in error) {
  //     if (formData[i] === '' || (i === 'consent' && formData[i] === false)) {
  //       newError[i] = { empty: true, invalid: false };
  //     }
  //   }
  //   setError(newError);

  //   if (
  //     !(
  //       error.firstName.empty ||
  //       error.lastName.empty ||
  //       error.email.empty ||
  //       error.email.invalid ||
  //       error.phone.empty ||
  //       error.phone.invalid ||
  //       error.consent.empty
  //     )
  //   ) {
  //     console.log(formData);
  //     alert('Form submitted successfully');
  //   } else {
  //     alert('Form incomplete');
  //   }
  // };

  return (
		<div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.nameFields}>
					<div className={styles.firstName}>
						<label htmlFor="firstName">First Name* </label>
						<span
							style={{
								marginLeft: "10px",
								fontSize: "14px",
								color: "#f05443",
							}}
						>
							{errors.firstName.message}
						</span>
						<br />
						<input
							className={styles.input}
							type="text"
							id="firstName"
							name="firstName"
							maxLength={50}
							value={values.firstName}
							onChange={(e) => handleChange(e?.target)}
							onBlur={(e) => handleChange(e?.target)}
						/>
					</div>
					<div className={styles.lastName}>
						<label htmlFor="lastName">Last Name*</label>
						<span
							style={{
								marginLeft: "10px",
								fontSize: "14px",
								color: "#f05443",
							}}
						>
							{errors.lastName.message}
						</span>
						<br />
						<input
							className={styles.input}
							type="text"
							id="lastName"
							name="lastName"
							maxLength={50}
							value={values.lastName}
							onChange={(e) => handleChange(e?.target)}
							onBlur={(e) => handleChange(e?.target)}
						/>
					</div>
				</div>
				<div className={styles.inputFields}>
					<label htmlFor="email">Email Address*</label>
					<span
						style={{
							marginLeft: "10px",
							fontSize: "14px",
							color: "#f05443",
						}}
					>
						{errors.email.message}
					</span>
					<br />
					<input
						className={styles.input}
						type="email"
						id="email"
						name="email"
						maxLength={50}
						value={values.email}
						onChange={(e) => handleChange(e?.target)}
						onBlur={(e) => handleChange(e?.target)}
					/>
				</div>
				<div className={styles.inputFields}>
					<label>Phone Number*</label>
					<span
						style={{
							marginLeft: "10px",
							fontSize: "14px",
							color: "#f05443",
						}}
					>
						{errors.phone.message}
					</span>
					<br />
					<div>
						<PhoneInput
							inputProps={{
								name: "phone",
							}}
							placeholder=""
							inputStyle={{
								border: "none",
								width: "100%",
								height: "41px",
								boxShadow: "none",
							}}
							buttonStyle={{
								border: "none",
								backgroundColor: "white",
							}}
							country="in"
							value={values.phone}
							onChange={(value) => handleChange({ value, name: "phone" })}
							onBlur={(e) => handleChange(e?.target)}
						/>
					</div>
				</div>
				<div className={styles.inputFields}>
					<label htmlFor="hear">How Did You Hear About Us?</label>
					<br />
					<input
						className={styles.input}
						type="text"
						id="hear"
						name="hear"
						maxLength={100}
						value={values.hear}
						onChange={(e) => handleChange(e?.target)}
					></input>
				</div>
				<div className={styles.inputFields}>
					<label htmlFor="company">Company</label>
					<br />
					<input
						className={styles.input}
						type="text"
						id="company"
						name="company"
						maxLength={50}
						value={values.company}
						onChange={(e) => handleChange(e?.target)}
					/>
				</div>
				<div className={styles.inputFields}>
					<label htmlFor="help">What Can We Help You With?</label>
					<br />
					<textarea
						className={styles.textarea}
						id="help"
						name="help"
						maxLength={500}
						value={values.help}
						onChange={(e) => handleChange(e?.target)}
					></textarea>
				</div>
				<div className={styles.checkbox}>
					<div>
						<input
							className={styles.input}
							type="checkbox"
							id="consent"
							name="consent"
							checked={values.consent}
							onChange={(e) => handleChange(e?.target)}
						/>
					</div>
					<label htmlFor="consent">
						{data?.checkboxText}
						<br />
						<span
							style={{
								fontSize: "14px",
								color: "#f05443",
							}}
						>
							{errors.consent.message}
						</span>
					</label>
				</div>
				<div className={styles.inputFields}>
					<button className={styles.button} type="submit">
						{data?.buttonText}
					</button>
				</div>
			</form>
		</div>
	);
}
