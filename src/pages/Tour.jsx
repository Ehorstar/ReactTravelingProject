import React, { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import styles from "../CSS/Tour.module.css";
import { StarFilled } from "@ant-design/icons";
import AuthContext from "../contexts/AuthContext";
import button from "../CSS/Button.module.css";
import I18nContext from "../contexts/I18nContext";

const Tour = (props) => {
  const tours = useLoaderData();
  const { loged } = useContext(AuthContext);
  const { to } = useParams();
  const tour = tours.find((t) => t.to === to);
  const navigate = useNavigate();
  const { currentTexts } = useContext(I18nContext);

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

        <div className={styles.tourDescription}>
          <p>{tour.description}</p>
        </div>

        <div className={styles.tourInfo}>
          <p className={styles.infoTitle}>{currentTexts.tour.generalInfo}</p>
          <p>
            {currentTexts.tour.nights}
            <strong>{tour.days}</strong>
          </p>
          <p>
            {currentTexts.tour.hotel}: <strong>{tour.hotel}</strong>
          </p>
          <p>
            {currentTexts.tour.departureAndReturn}:{" "}
            <strong>
              {tour.dateStart} – {tour.dateEnd}
            </strong>
          </p>
          <div className={styles.line}>
            <p className={styles.tourPrice}>
              {currentTexts.tour.pricePerPerson}:
              <span className={styles.price}> ${tour.price}</span>
            </p>
            <p className={styles.tourButton}>
              <button onClick={checkFunction} className={button.button}>
                {currentTexts.common.book}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
