import React, { useContext } from "react";
import I18nContext from "../contexts/I18nContext";
import { useLoaderData } from "react-router-dom";
import "../CSS/Booking.css";
import {
  CalendarOutlined,
  CarOutlined,
  EnvironmentFilled,
  HomeOutlined,
  MoonOutlined,
  StarFilled,
} from "@ant-design/icons";

const Booking = () => {
  const { currentTexts } = useContext(I18nContext);
  const tours = useLoaderData();
  return (
    <div className="container">
      <h1 className="tour">Доступні білети</h1>

      {tours.map((tour) => (
        <div key={tour.id} className="tour">
          <img className="tour-img" src={tour.image} alt={tour.to} />

          <div className="tour-title">
            <div>
              <span>
                <EnvironmentFilled style={{ fontSize: 26, color: "red" }} />
                <span style={{ fontSize: 23 }}>{tour.to}</span>
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

            <div className="group">
              <span className="info">
                <CalendarOutlined
                  style={{ fontSize: 23, color: "dodgerblue" }}
                />
                <span style={{ fontSize: 17 }}>
                  <MoonOutlined /> {tour.days}
                </span>
              </span>

              <span className="info">
                <HomeOutlined style={{ fontSize: 23, color: "dodgerblue" }} />
                <span style={{ fontSize: 17 }}>{tour.hotel}</span>
              </span>

              <span className="info">
                <CarOutlined style={{ fontSize: 23, color: "dodgerblue" }} />
                <span style={{ fontSize: 17 }}>{tour.dateStart}</span>
              </span>
              <div className="tour-price">
                ${tour.price}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Booking;
