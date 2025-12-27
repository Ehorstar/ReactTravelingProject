import React, { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import styles from "../CSS/Tour.module.css";
import { StarFilled } from "@ant-design/icons";
import AuthContext from "../contexts/AuthContext";
import button from "../CSS/Button.module.css";

const Tour = (props) => {
  const tours = useLoaderData();
  const { loged } = useContext(AuthContext);
  const { to } = useParams();
  const tour = tours.find((t) => t.to === to);
  const navigate = useNavigate();

  const checkFunction = () => {
    if (loged) {
      navigate(`/booking/${tour.countryTo}`);
    } else {
      navigate("/registration");
    }
  };

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.tourTitle}>
          <span>{tour.hotel}, </span>
          <span>{tour.rating}</span>
          <StarFilled style={{ color: "gold", fontSize: 28 }} />{" "}
        </div>

        <div>
          <span className={styles.tourCountry}>
            {tour.countryTo}, {tour.to}
          </span>
        </div>

        <img className={styles.img} src={tour.image} alt={tour.to} />

        <div className={styles["tour-title"]}>
          <div>
            <div style={{ fontSize: 24, fontFamily: "Poppins" }}>
              {tour.description}
            </div>
          </div>

          <div className={styles["tour-info"]}>
            <h1>Загальна інформація</h1>

            <span>Кількість ночей: {tour.days}</span>

            <span>Готель: {tour.hotel}</span>

            <span>
              Виїзд та повернення: {tour.dateStart} - {tour.dateEnd}
            </span>
            <span className={styles.price}>
              Ціна за людину:{" "}
              <span className={styles["tour-price"]}> ${tour.price}</span>
            </span>

            <span>
              <button onClick={() => checkFunction()} className={button.button}>
                ORDER
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
