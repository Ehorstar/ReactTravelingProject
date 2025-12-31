import React, { useContext, useState } from "react";
import ThemeButton from "../buttons/ThemeButton";
import LangButton from "../buttons/LangButton";
import styles from "../CSS/Settings.module.css";
import AuthContext from "../contexts/AuthContext";
import button from "../CSS/Button.module.css";
import I18nContext from "../contexts/I18nContext";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { loged, setLoged } = useContext(AuthContext);
  const { currentTexts } = useContext(I18nContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    password: "",
    repeatpassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be more than 2")
      .max(18, "Name must be less 18"),

    password: Yup.string().matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Password incorrect"
    ),

    repeatpassword: Yup.string().when("password", {
      is: (val) => val && val.length > 0,
      then: (schema) =>
        schema
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Repeat password"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const submitHandler = (values, { resetForm }) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) return;
    if (!loged) return navigate("/registration");

    const updatedUser = {
      ...savedUser,
      name: values.name.trim() || savedUser.name,
      password: values.password || savedUser.password,
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    resetForm();
  };

  const logoutHandler = () => {
    if (!loged) return navigate("/registration");
    setOpen(true);
  };

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <h1>Main Settings</h1>

        <div className={styles.box}>
          <div className={styles.row} style={{ paddingBottom: "10px" }}>
            <span>Change theme</span>
            <ThemeButton />
          </div>

          <div className={styles.row} style={{ paddingTop: "14px" }}>
            <span>Change language</span>
            <LangButton />
          </div>
        </div>

        <h2>Account Settings</h2>

        <Formik
          initialValues={initialValues}
          onSubmit={submitHandler}
          validationSchema={validationSchema}
        >
          {() => (
            <Form>
              <div className={styles.box}>
                <div className={styles.row} style={{ paddingBottom: "17px" }}>
                  <span>Change name</span>
                  <Field
                    name="name"
                    placeholder="New name"
                    className={styles.rowInput}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={styles.error}
                  />
                </div>
                <div className={styles.row} style={{ paddingTop: "15px" }}>
                  <span className={styles.text}>Change password</span>
                  <div className={styles.rowPasswords}>
                    <Field
                      type="password"
                      name="password"
                      placeholder="New password"
                      className={styles.rowInput}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className={styles.error}
                    />

                    <Field
                      type="password"
                      name="repeatpassword"
                      placeholder="Repeat new password"
                      className={styles.rowInput}
                    />
                    <ErrorMessage
                      name="repeatpassword"
                      component="div"
                      className={styles.error}
                    />
                    <div className={styles.buttons}>
                      <button className={button.button} type="submit">
                        {currentTexts.button}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className={`${styles.box} ${styles.danger}`}>
          <div className={styles.rowQuite} style={{ padding: "5px" }}>
            <span>Leave account</span>
            <button
              className={button.buttonDelete}
              onClick={() => logoutHandler()}
            >
              Leave Account
            </button>
          </div>
        </div>
        {open && (
          <div className={styles.overlay}>
            <div className={styles.modal}>
              <h3>Leave account?</h3>
              <p>You will be logged out from this account.</p>

              <div className={styles.actions}>
                <button
                  className={button.button}
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>

                <button
                  className={button.buttonDelete}
                  onClick={() => {
                    setLoged(false);
                    setOpen(false);
                  }}
                >
                  Leave
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
