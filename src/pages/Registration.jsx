import React, { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import I18nContext from "../contexts/I18nContext";
import styles from "../CSS/Registration.module.css";
import button from "../CSS/Button.module.css";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  age: "",
  password: "",
  repeatpassword: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
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
  const navigate = useNavigate();

  const submitHandler = (values, { resetForm }) => {

    console.log(values);
    resetForm();

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: values.name,
        password: values.password,
      })
    );

    navigate("/login");
  };

  return (
    <div className={styles["registration-hero"]}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            {currentTexts.auth.titleRegistration}
          </h1>
          <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
            validationSchema={validationSchema}
          >
            {() => (
              <Form>
                <div className={styles["registration-form"]}>
                  <div>
                    <Field name="name" placeholder={currentTexts.auth.name} />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div>
                    <Field
                      name="age"
                      type="number"
                      placeholder={currentTexts.auth.age}
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
                      placeholder={currentTexts.auth.password}
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
                      placeholder={currentTexts.auth.repeatpassword}
                    />
                    <ErrorMessage
                      name="repeatpassword"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                </div>

                <div className={styles.button}>
                  <button className={button.button} type="submit">
                    {currentTexts.common.button}
                  </button>
                </div>

                <Link to="/login" className={styles.link}>
                  {currentTexts.auth.alreadyHaveAccount}
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Registration;
