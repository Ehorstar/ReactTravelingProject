import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";

const Reservation = () => {
  return (
    <div>
      <h1>Reservation</h1>

      <Formik
        initialValues={{
          count: "1",
          clients: [""], // початково 1 клієнт
        }}
        onSubmit={(values) => {
          console.log("Відправлено:", values);
        }}
      >
        {({ values, setFieldValue }) => {
          // Функція, яка реагує на зміну кількості осіб
          const handleCountChange = (e) => {
            const count = parseInt(e.target.value) || 1;

            // Оновлюємо поле count
            setFieldValue("count", count.toString());

            // Оновлюємо масив clients під нову кількість
            const newClients = [];
            for (let i = 0; i < count; i++) {
              // Зберігаємо існуючі значення, якщо вони є
              newClients.push(values.clients[i] || "");
            }
            setFieldValue("clients", newClients);
          };

          return (
            <Form>
              <div>
                <label>Кількість осіб: </label>
                <Field
                  as="select"
                  name="count"
                  onChange={handleCountChange} // Ключовий момент!
                  value={values.count}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Field>
              </div>

              <FieldArray
                name="clients"
                render={() => (
                  <div>
                    <h3>Дані клієнтів:</h3>
                    {values.clients.map((client, index) => (
                      <div key={index}>
                        <label>Клієнт {index + 1}: </label>
                        <Field
                          name={`clients[${index}]`}
                          placeholder={`Ім'я клієнта ${index + 1}`}
                          style={{ margin: "5px", padding: "8px" }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              />

              <button
                type="submit"
                style={{ marginTop: "20px", padding: "10px 20px" }}
              >
                Забронювати
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Reservation;
