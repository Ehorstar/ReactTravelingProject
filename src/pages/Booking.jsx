import { ErrorMessage, Field, FieldArray, Formik, Form } from "formik";
import React, { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import styles from "../CSS/Booking.module.css";
import { EnvironmentFilled } from "@ant-design/icons";
import TripsContext from "../contexts/TripsContext";
import button from "../CSS/Button.module.css";
import I18nContext from "../contexts/I18nContext";

const initialValues = {
  amount: 1,
  passengers: [{ name: "", age: "" }],
};

const validationSchema = Yup.object({
  passengers: Yup.array().of(
    Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be more than 2")
        .max(18, "Name must be less than 18"),
      age: Yup.number()
        .typeError("Age must be a number")
        .positive("Age must be positive")
        .integer("Age must be an integer")
        .required("Age is required"),
    })
  ),
});

const Booking = () => {
  const { addToTrips } = useContext(TripsContext);
  const tours = useLoaderData();
  const { countryTo } = useParams();
  const navigate = useNavigate();
  const tour = tours.find((t) => t.countryTo === countryTo);
  const { currentTexts } = useContext(I18nContext);

  const submitHandler = (values, { resetForm }) => {
    addToTrips({ ...tour, ...values });
    navigate("/tripshistory");
    resetForm();
  };

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{currentTexts.booking.title}</h1>
          <span className={styles.location}>
            <EnvironmentFilled style={{ fontSize: 26, color: "red" }} />
            {tour.countryTo}
          </span>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          {({ values, setFieldValue }) => {
            const handleAmountChange = (e) => {
              const amount = Number(e.target.value);
              setFieldValue("amount", amount);

              setFieldValue(
                "passengers",
                Array.from(
                  { length: amount },
                  (_, i) => values.passengers[i] || { name: "", age: "" }
                )
              );
            };

            return (
              <Form className={styles.form}>
                <div className={styles.selectRow}>
                  <label>{currentTexts.booking.passengers}</label>
                  <Field
                    className={styles.input}
                    as="select"
                    name="amount"
                    onChange={handleAmountChange}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </Field>
                </div>

                <FieldArray name="passengers">
                  {() => (
                    <div className={styles.passengers}>
                      <h3>{currentTexts.booking.passengerDetails}</h3>

                      {values.passengers.map((_, index) => (
                        <div key={index} className={styles.passenger}>
                          <div className={styles.field}>
                            <Field
                              name={`passengers.${index}.name`}
                              className={styles.input}
                              placeholder={currentTexts.booking.passengerName}
                            />
                            <ErrorMessage
                              name={`passengers.${index}.name`}
                              component="div"
                              className={styles.error}
                            />
                          </div>

                          <div className={styles.field}>
                            <Field
                              className={styles.input}
                              name={`passengers.${index}.age`}
                              type="number"
                              placeholder={currentTexts.booking.passengerAge}
                            />
                            <ErrorMessage
                              name={`passengers.${index}.age`}
                              component="div"
                              className={styles.error}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </FieldArray>

                <div className={styles.footer}>
                  <div className={styles.total}>
                    {currentTexts.booking.total}:{" "}
                    <span>${tour.price * values.amount}</span>
                  </div>

                  <button className={button.button} type="submit">
                    {currentTexts.common.book}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Booking;
