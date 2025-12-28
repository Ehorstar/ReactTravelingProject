import React, { useContext } from "react";
import TripsContext from "../contexts/TripsContext";
import styles from "../CSS/TripsHistory.module.css";
import button from "../CSS/Button.module.css";

const TripsHistory = () => {
  const { trips, tripsCount, removeFromTrips } = useContext(TripsContext);

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Історія подорожей</h1>

          {tripsCount === 0 ? (
            <p className={styles.empty}>Немає подорожей в історії</p>
          ) : (
            <div className={styles.list}>
              {trips.map((trip) => (
                <div key={trip.id} className={styles.card}>
                  <div className={styles.left}>
                    <div className={styles.header}>
                      <span className={styles.destination}>To {trip.to}</span>
                      <span className={styles.category}>{trip.category}</span>
                    </div>

                    <div className={styles.info}>
                      <div>Hotel: {trip.hotel}</div>
                      <div>Passengers: {trip.amount}</div>
                      <div>
                        Dates: {trip.dateStart} – {trip.dateEnd}
                      </div>
                    </div>

                    {/* 
                    <div className={styles.passengers}>
                      {trip.passengers.map((p, i) => (
                        <span key={i} className={styles.passenger}>
                          {p.name} ({p.age})
                        </span>
                      ))}
                    </div> */}

                  </div>

                  <div className={styles.right}>
                    <span className={styles.totalLabel}>Total</span>
                    <span className={styles.price}>
                      ${trip.price * trip.amount}
                    </span>
                  </div>

                  {/* <button
                    className={button.button}
                    onClick={() => removeFromTrips(trip.id)}
                  >
                    {" "}
                    Remove{" "}
                  </button> */}
                  
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripsHistory;
