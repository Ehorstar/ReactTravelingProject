import React, { useContext, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import I18nContext from "../contexts/I18nContext";
import styles from "../CSS/Login.module.css";
import AuthContext from "../contexts/AuthContext";
import button from "../CSS/Button.module.css";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be more than 2")
    .max(18, "Name must be less 18")
    .required("Name is required"),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password incorrect"
    )
    .required("Password is required"),
});

const Login = () => {
  const { currentTexts } = useContext(I18nContext);
  const { loged, setLoged } = useContext(AuthContext);
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const submitHandler = (values, { resetForm }) => {
    if (values.name === savedUser.name && values.password === savedUser.password) {
      setLoged(true);
      navigate("/");
    } else {
      alert("User not found");
    }

    resetForm();
  };

  return (
    <div className={styles["registration-hero"]}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>Login</h1>

          <Formik
            initialValues={initialValues}
            onSubmit={submitHandler}
            validationSchema={validationSchema}
          >
            {() => (
              <Form>
                <div className={styles["registration-form"]}>
                  <div>
                    <Field name="name" placeholder={currentTexts.name} />
                    <ErrorMessage
                      name="name"
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
                </div>

                <div className={styles.button}>
                  <button className={button.button} type="submit">
                    {currentTexts.button}
                  </button>
                </div>

                <Link to="/registration" className={styles.link}>
                  Registration
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
