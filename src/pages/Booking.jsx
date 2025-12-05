import React, { useContext } from "react";
import I18nContext from "../contexts/I18nContext";

const Booking = () => {
  const { currentTexts } = useContext(I18nContext);
  return (
    <div>
      <h1>{currentTexts.titleBooking}</h1>
    </div>
  );
};

export default Booking;
