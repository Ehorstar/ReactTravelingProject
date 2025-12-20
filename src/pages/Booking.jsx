import { ErrorMessage, Field, FieldArray, Formik, Form } from "formik";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import * as Yup from "yup";
import "../CSS/Booking.css";
import { EnvironmentFilled } from "@ant-design/icons";

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
  const tours = useLoaderData();
  const { countryTo } = useParams();

  const tour = tours.find((t) => t.countryTo === countryTo);

  const submitHandler = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className="container">
      <h1>
        Booking {" "}
        <EnvironmentFilled style={{ fontSize: 26, color: "red" }} />
        {tour.countryTo}
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {({ values, setFieldValue }) => {
          const handleAmountChange = (e) => {
            const amount = Number(e.target.value);

            setFieldValue("amount", amount);

            const newPassengers = Array.from(
              { length: amount },
              (_, i) => values.passengers[i] || { name: "", age: "" }
            );

            setFieldValue("passengers", newPassengers);
          };

          return (
            <Form>
              <div className="dates">
                <span>
                  {tour.dateStart}-{tour.dateEnd}
                </span>
              </div>

              <div className="price">
                <span>Price for 1 person: {tour.price}</span>
              </div>
              <div>
                <div className="people-amount">
                  <label>Кількість осіб</label>

                  <Field
                    as="select"
                    name="amount"
                    onChange={handleAmountChange}
                  >
                    <option value={1}>1 person</option>
                    <option value={2}>2 people</option>
                    <option value={3}>3 people</option>
                    <option value={4}>4 people</option>
                  </Field>
                </div>

                <FieldArray name="passengers">
                  {() => (
                    <div className="form-passengers">
                      <h3>Дані пасажирів:</h3>

                      {values.passengers.map((_, index) => (
                        <div key={index} className="passenger-row">
                          <div className="field">
                            <Field
                              name={`passengers.${index}.name`}
                              placeholder={`Ім'я ${index + 1} пасажира `}
                            />
                            <ErrorMessage
                              name={`passengers.${index}.name`}
                              component="div"
                              className="error"
                            />
                          </div>

                          <div className="field">
                            <Field
                              name={`passengers.${index}.age`}
                              placeholder="Вік"
                              type="number"
                            />
                            <ErrorMessage
                              name={`passengers.${index}.age`}
                              component="div"
                              className="error"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </FieldArray>
              </div>

              <div className="total-price">
                <span>Total price: ${tour.price * values.amount}</span>
              </div>

              <button className="button" type="submit">
                Book
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Booking;
