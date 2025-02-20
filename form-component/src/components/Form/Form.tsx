"use client";

import styles from "./Form.module.css";
import useForm from "./useForm";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

export default function Form({ data }: any) {
  const { values, errors, handleChange, handleSubmit, setValues } = useForm(
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

  const handleHalfData = () => {
    values.firstName = "raag";
    values.lastName = "joshi";
    values.company = "maruti";
    values.consent = true;
  };

  return (
    <div>
      <button className={styles.button} onClick={handleHalfData}>
        Set Half Data
      </button>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputFields}></div>
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
          <input
            className={styles.input}
            type="checkbox"
            id="consent"
            name="consent"
            checked={values.consent}
            onChange={(e) => handleChange(e?.target)}
          />
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
