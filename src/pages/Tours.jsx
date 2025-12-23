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
    <div className={styles["booking-hero"]}>
      <div className={styles.container}>

        <div className={styles["tour-header"]}>
          <h1>Доступні тури</h1>
          <Search />
        </div>

        {tours.map((tour) => (
          <div key={tour.id} className={styles.tour}>
            <img className={styles["tour-img"]} src={tour.image} alt={tour.to} />

            <div className={styles["tour-title"]}>
              <div>
                <span>
                  <EnvironmentFilled style={{ fontSize: 26, color: "red" }} />
                  <span style={{ fontSize: 30 }}>{tour.to}</span>
                </span>
                <div></div>
                <span style={{ fontSize: 19 }}>{tour.rating}</span>
                <StarFilled style={{ color: "gold", fontSize: 21 }} />{" "}
                <span style={{ color: "gray", fontSize: 19 }}>
                  {tour.category}
                </span>
                <div style={{ fontSize: 24, fontFamily: "Poppins" }}>
                  {tour.description}
                </div>
              </div>
              <div className={styles.group}>
                <span className={styles.info}>
                  <MoonOutlined className={styles.icon} />
                  <span style={{ fontSize: 17 }}>{tour.days}</span>
                </span>

                <span className={styles.info}>
                  <HomeOutlined className={styles.icon} />
                  <span style={{ fontSize: 17 }}>{tour.hotel}</span>
                </span>

                <span className={styles.info}>
                  <CalendarOutlined className={styles.icon} />
                  <span style={{ fontSize: 17 }}>{tour.dateStart}</span>
                </span>

                <span className={styles.info}>
                  <UserOutlined className={styles.icon} />
                  <span className={styles["tour-price"]}>${tour.price}</span>
                </span>

                <div className={styles["buying"]}>
                  <span>
                    <button
                      onClick={() => navigate(`/tour/${tour.to}`)}
                      className={button.button}
                      style={{fontWeight: "bold"}}
                    >
                      ORDER
                    </button>
                    
                  </span>
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
