import React, { useContext } from "react";
import I18nContext from "../contexts/I18nContext";
import { useLoaderData, useNavigate } from "react-router-dom";

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
    <div className="booking-hero">
      <div className="container">
        
        <div className="booking-header">
          <h1>Доступні тури</h1>
          <Search />
        </div>

        {tours.map((tour) => (
          <div key={tour.id} className="tour">
            <img className="tour-img" src={tour.image} alt={tour.to} />

            <div className="tour-title">
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
              <div className="group">
                <span className="info">
                  <MoonOutlined style={{ fontSize: 23, color: "white" }} />
                  <span style={{ fontSize: 17 }}>{tour.days}</span>
                </span>

                <span className="info">
                  <HomeOutlined style={{ fontSize: 23, color: "white" }} />
                  <span style={{ fontSize: 17 }}>{tour.hotel}</span>
                </span>

                <span className="info">
                  <CalendarOutlined style={{ fontSize: 23, color: "white" }} />
                  <span style={{ fontSize: 17 }}>{tour.dateStart}</span>
                </span>

                <span className="info">
                  <UserOutlined style={{ fontSize: 23, color: "white" }} />
                  <span className="tour-price">${tour.price}</span>
                </span>

                <div className="buying">
                  <span>
                    <button
                      onClick={() => navigate(`/tour/${tour.to}`)}
                      className="button"
                      style={{color: "white", fontWeight: "bold"}}
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
