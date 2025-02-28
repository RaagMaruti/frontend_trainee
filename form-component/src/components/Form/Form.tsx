import styles from "./Form.module.css";
import useForm from "./useForm";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

export default function Form({ fields, button, text }: any) {
  const { values, errors, errorMessages, handleChange, handleSubmit } = useForm(
    {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      howDidYouHearAboutUs: "",
      companyName: "",
      howCanWeHelpYou: "",
      consent: false,
    },
    {
      firstName: {
        empty: false,
      },
      lastName: {
        empty: false,
      },
      emailAddress: {
        empty: false,
        invalid: false,
      },
      phoneNumber: {
        empty: false,
        invalid: false,
      },
      consent: {
        empty: false,
      },
    },
    {
      firstName: true,
      lastName: true,
      emailAddress: true,
      phoneNumber: true,
      howDidYouHearAboutUs: false,
      companyName: false,
      howCanWeHelpYou: false,
      consent: true,
    }
  );

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.nameFields}>
          <div className={styles.firstName}>
            <label
              className={errors.firstName.empty ? styles.errorLabel : undefined}
              htmlFor="firstName"
            >
              {fields.fieldNameFor_FirstName}
            </label>
            <br />
            <input
              className={
                errors.firstName.empty
                  ? `${styles.errorInput} ${styles.input}`
                  : `${styles.input}`
              }
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
            <label
              className={errors.lastName.empty ? styles.errorLabel : undefined}
              htmlFor="lastName"
            >
              {fields.fieldNameFor_LastName}
            </label>
            <br />
            <input
              className={
                errors.lastName.empty
                  ? `${styles.errorInput} ${styles.input}`
                  : `${styles.input}`
              }
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
          <label
            className={
              errors.emailAddress.empty || errors.emailAddress.invalid
                ? styles.errorLabel
                : undefined
            }
            htmlFor="email"
          >
            {fields.fieldNameFor_EmailAddress}
          </label>
          <br />
          <input
            className={
              errors.emailAddress.empty
                ? `${styles.errorInput} ${styles.input}`
                : `${styles.input}`
            }
            type="email"
            id="emailAddress"
            name="emailAddress"
            maxLength={50}
            value={values.emailAddress}
            onChange={(e) => handleChange(e?.target)}
            onBlur={(e) => handleChange(e?.target)}
          />
        </div>
        <div className={styles.inputFields}>
          <label
            className={
              errors.phoneNumber.empty || errors.phoneNumber.invalid
                ? styles.errorLabel
                : undefined
            }
          >
            {fields.fieldNameFor_PhoneNumber}
          </label>
          <br />
          <div>
            <PhoneInput
              placeholder=""
              inputStyle={
                errors.phoneNumber.empty || errors.phoneNumber.invalid
                  ? {
                      border: "1px solid #ff0000",
                      width: "100%",
                      height: "41px",
                      boxShadow: "none",
                      marginTop: " 0.625rem !important",
                    }
                  : {
                      border: "1px solid transparent",
                      width: "100%",
                      height: "41px",
                      boxShadow: "none",
                      marginTop: " 0.625rem !important",
                    }
              }
              buttonStyle={
                errors.phoneNumber.empty || errors.phoneNumber.invalid
                  ? {
                      borderWidth: "1px 0px 1px 1px",
                      borderColor: "#ff0000",
                      backgroundColor: "white",
                    }
                  : {
                      border: "none",
                      backgroundColor: "white",
                    }
              }
              country="in"
              value={values.phoneNumber}
              onChange={(value) => handleChange({ value, name: "phoneNumber" })}
              onBlur={(e) => handleChange(e?.target)}
            />
          </div>
        </div>
        <div className={styles.inputFields}>
          <label htmlFor="howDidYouHearAboutUs">
            {fields.fieldNameFor_HowDidYouHearAboutUs}
          </label>
          <br />
          <input
            className={styles.input}
            type="text"
            id="howDidYouHearAboutUs"
            name="howDidYouHearAboutUs"
            maxLength={100}
            value={values.howDidYouHearAboutUs}
            onChange={(e) => handleChange(e?.target)}
          ></input>
        </div>
        <div className={styles.inputFields}>
          <label htmlFor="companyName">{fields.fieldNameFor_CompanyName}</label>
          <br />
          <input
            className={styles.input}
            type="text"
            id="companyName"
            name="companyName"
            maxLength={50}
            value={values.companyName}
            onChange={(e) => handleChange(e?.target)}
          />
        </div>
        <div className={styles.inputFields}>
          <label className={styles.errLabel} htmlFor="howCanWeHelpYou">
            {fields.fieldNameFor_HowCanWeHelpYou}
          </label>
          <br />
          <textarea
            className={styles.textarea}
            id="howCanWeHelpYou"
            name="howCanWeHelpYou"
            maxLength={500}
            value={values.howCanWeHelpYou}
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
          <label
            className={errors.consent.empty ? styles.errorLabel : undefined}
          >
            {text}
          </label>
        </div>
        <button
          className={styles.button}
          type="submit"
          disabled={errorMessages.empty || errorMessages.invalid ? true : false}
        >
          {button}
        </button>
        <div className={styles.errorMessages}>
          <div>{errorMessages.empty && errorMessages.empty}</div>
          <div>{errorMessages.invalid && errorMessages.invalid}</div>
        </div>
      </form>
    </>
  );
}
