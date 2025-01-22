import React, { useContext } from "react";
import { CitiesContext } from "./CitiesContext"; // curly braces is a must as it is named export
import styles from "./Cities.module.css";
import { Link } from "react-router";

const Cities = () => {
  const { state, dispatch } = useContext(CitiesContext);

  const handleDeleteCity = (id) => {
    dispatch({ type: "REMOVE_CITY", payload: id });
  };

  return (
    <>
      {state.cities.length < 1 ? (
        <p className={styles.message}>
          👋 Add your first city by clicking on a city on the map
        </p>
      ) : (
        <ul className={styles.cityList}>
          {state.cities.map((city) => (
            <li key={city.id}>
              <Link className={styles.cityItem}>
                <span className={styles.emoji}>{city.countryFlag}</span>
                <h3 className={styles.name}>{city.cityName}</h3>
                <p className={styles.date}>
                  ({new Date(city.date).toLocaleDateString()})
                </p>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDeleteCity(city.id)}
                >
                  ×
                </button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cities;
