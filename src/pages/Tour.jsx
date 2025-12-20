import React, { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "../CSS/Tour.css";
import { StarFilled } from "@ant-design/icons";
import RegistrationContext from "../contexts/RegistrationContext";

const Tour = (props) => {
  const tours = useLoaderData();
  const { registred } = useContext(RegistrationContext);
  const { to } = useParams();
  const tour = tours.find((t) => t.to === to);
  const navigate = useNavigate();

  const checkFunction = () => {
    if (registred) {
      navigate(`/booking/${tour.countryTo}`);
    } else{
      navigate("/registration");
    }
  };
  
  return (
    <div className="container">
      <div>
        <span style={{ fontSize: 28, color: "dodgerblue" }}>
          {tour.hotel},{" "}
        </span>
        <span style={{ fontSize: 28, color: "dodgerblue" }}>{tour.rating}</span>
        <StarFilled style={{ color: "gold", fontSize: 28 }} />{" "}
      </div>

      <div>
        <span style={{ fontSize: 19, color: "gray" }}>
          {tour.countryTo}, {tour.to}
        </span>
      </div>

      <img className="img" src={tour.image} alt={tour.to} />

      <div className="tour-title">
        <div>
          <div style={{ fontSize: 24, fontFamily: "Poppins" }}>
            {tour.description}
          </div>
        </div>

        <div className="tour-info">
          <h1>Загальна інформація</h1>

          <span>Кількість ночей: {tour.days}</span>

          <span>Готель: {tour.hotel}</span>

          <span>
            Виїзд та повернення: {tour.dateStart} - {tour.dateEnd}
          </span>

          <span className="tour-price">${tour.price}</span>
          <span>
            <button onClick={() => checkFunction()} className="button">
              ORDER
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tour;
