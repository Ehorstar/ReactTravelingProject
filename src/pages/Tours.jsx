import React, { useContext } from "react";
import I18nContext from "../contexts/I18nContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import styles from "../CSS/Tours.module.css";
import button from "../CSS/Button.module.css";

import {
  CalendarOutlined,
  EnvironmentFilled,
  HomeOutlined,
  MoonOutlined,
  StarFilled,
  UserOutlined,
} from "@ant-design/icons";
import Search from "../components/Search";

const Tours = () => {
  const { currentTexts } = useContext(I18nContext);
  const tours = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className={`${styles["booking-hero"]} ${styles.page}`}>
      <div className={styles.container}>
        <div className={styles["tour-header"]}>
          <h1>{currentTexts.tours.title}</h1>
          <Search />
        </div>

        {tours.map((tour) => (
          <div key={tour.id} className={styles.tour}>
            <img
              className={styles["tour-img"]}
              src={tour.image}
              alt={tour.to}
            />

            <div className={styles["tour-title"]}>
              <div>
                <div className={styles["location-rating"]}>
                  <div className={styles.location}>
                    <EnvironmentFilled style={{ fontSize: 26, color: "red" }} />
                    <span>{tour.to}</span>
                  </div>

                  <div className={styles.rating}>
                    <span className={styles["rating-value"]}>
                      {tour.rating}
                    </span>
                    <StarFilled style={{ color: "gold", fontSize: 18 }} />
                    <span className={styles.category}>{tour.category}</span>
                  </div>
                </div>

                <p className={styles.description}>{tour.description}</p>
              </div>

              <div className={styles.group}>
                <span className={styles.info}>
                  <MoonOutlined className={styles.icon} />
                  <span className={styles["info-text"]}>
                    {tour.days} {currentTexts.tours.nights}
                  </span>
                </span>

                <span className={styles.info}>
                  <HomeOutlined className={styles.icon} />
                  <span className={styles["info-text"]}>{tour.hotel}</span>
                </span>

                <span className={styles.info}>
                  <CalendarOutlined className={styles.icon} />
                  <span className={styles["info-text"]}>{tour.dateStart}</span>
                </span>

                <span className={styles.info}>
                  <UserOutlined className={styles.icon} />
                  <span className={styles["tour-price"]}>${tour.price}</span>
                </span>

                <div className={styles.buying}>
                  <button
                    onClick={() => navigate(`/tour/${tour.to}`)}
                    className={button.button}
                    style={{ fontWeight: "bold", padding: "10px 24px" }}
                  >
                    {currentTexts.tours.details}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
