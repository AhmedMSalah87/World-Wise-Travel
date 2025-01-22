import React, { useContext } from "react";
import { CitiesContext } from "./CitiesContext";
import styles from "./Countries.module.css";

const Countries = () => {
  const { state } = useContext(CitiesContext);

  return (
    <>
      <ul className={styles.countryList}>
        {state.cities.map((city, index) => (
          <li key={index} className={styles.countryItem}>
            <span>{city.countryFlag}</span>
            <span>{city.country}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Countries;
