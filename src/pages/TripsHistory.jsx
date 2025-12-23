import React, { useContext } from "react";
import TripsContext from "../contexts/TripsContext";
import styles from "../CSS/TripsHistory.module.css";
import button from "../CSS/Button.module.css";

const TripsHistory = () => {
  const { trips, removeFromTrips } = useContext(TripsContext);

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div>
            <h1>Історія подорожей</h1>
          </div>

          <div className={styles.tours}>
            {trips.map((trip) => (
              <div key={trip.id}>
                <h2>Trip to {trip.to}</h2>
                <p>Country: {trip.countryTo}</p>
                <p>Amount of Passengers: {trip.amount}</p>
                <p>Total Price: ${trip.price * trip.amount}</p>
                <p>
                  Passengers:{" "}
                  {trip.passengers.map((p, i) => (
                    <div key={i}>
                      {p.name} ({p.age})
                    </div>
                  ))}
                </p>
                <button
                  className={button.button}
                  onClick={() => removeFromTrips(trip.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripsHistory;
