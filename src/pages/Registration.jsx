import React, { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import I18nContext from "../contexts/I18nContext";
import styles from "../CSS/Registration.module.css";
import RegistrationContext from "../contexts/RegistrationContext";
import button from "../CSS/Button.module.css";

const initialValues = {
  fullname: "",
  age: "",
  password: "",
  repeatpassword: "",
};

const validationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Name must be more than 2")
    .max(18, "Name must be less 18")
    .required("Name is required"),
  age: Yup.number()
    .typeError("Age must be a number")
    .positive("Age must be positive")
    .integer("Age must be an integer"),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password incorrect"
    )
    .required("Password is required"),

  repeatpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Repeat password"),
});
const Registration = () => {
  const { currentTexts } = useContext(I18nContext);
  const { registred, setRegistred } = useContext(RegistrationContext);

  console.log(registred);

  const leave = () => {
    if (registred) {
      setRegistred(false);
    }
  };

  const submitHandler = (values, { resetForm }) => {
    if (registred) {
      console.log("Already registred");
    } else {
      setRegistred(true);
    }

    console.log(values);
    resetForm();
  };

  return (
    <div className={styles["registration-hero"]}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1>{currentTexts.titleRegistration}</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
            validationSchema={validationSchema}
          >
            {() => (
              <Form className={styles["registration-form"]}>
                <div>
                  <Field name="fullname" placeholder={currentTexts.name} />
                  <ErrorMessage
                    name="fullname"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div>
                  <Field
                    name="age"
                    type="number"
                    placeholder={currentTexts.age}
                  />
                  <ErrorMessage
                    name="age"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder={currentTexts.password}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div>
                  <Field
                    type="password"
                    name="repeatpassword"
                    placeholder={currentTexts.repeatpassword}
                  />
                  <ErrorMessage
                    name="repeatpassword"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles["buttons"]}>
                  <button className={button.button} type="submit">
                    {currentTexts.button}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Registration;
