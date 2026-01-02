import React, { useContext } from "react";
import TripsContext from "../contexts/TripsContext";
import styles from "../CSS/TripsHistory.module.css";
import I18nContext from "../contexts/I18nContext";

const TripsHistory = () => {
  const { trips, tripsCount } = useContext(TripsContext);
  const { currentTexts } = useContext(I18nContext);

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>{currentTexts.history.title}</h1>

          {tripsCount === 0 ? (
            <p className={styles.empty}>{currentTexts.history.noTrips}</p>
          ) : (
            <div className={styles.list}>
              {trips.map((trip) => (
                <div key={trip.id} className={styles.card}>
                  <div className={styles.left}>
                    <div className={styles.header}>
                      <span className={styles.destination}>
                        {currentTexts.history.to} {trip.to}
                      </span>
                      <span className={styles.category}>{trip.category}</span>
                    </div>

                    <div className={styles.info}>
                      <div>
                        {currentTexts.history.hotel}: {trip.hotel}
                      </div>
                      <div>
                        {currentTexts.history.amountOfPassengers}: {trip.amount}
                      </div>
                      <div>
                        {currentTexts.history.dates}: {trip.dateStart} –{" "}
                        {trip.dateEnd}
                      </div>
                    </div>
                  </div>

                  <div className={styles.right}>
                    <span className={styles.totalLabel}>Total</span>
                    <span className={styles.price}>
                      ${trip.price * trip.amount}
                    </span>
                  </div>
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
