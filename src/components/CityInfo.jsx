import React, { useContext, useEffect } from "react";
import { CitiesContext } from "./CitiesContext";
import { useNavigate, useParams } from "react-router";
import styles from "./CityInfo.module.css";
import Button from "./Button";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const CityInfo = () => {
  const { state, dispatch } = useContext(CitiesContext);
  const { id } = useParams(); // id type is string

  useEffect(() => {
    dispatch({ type: "SET_CURRENT_CITY", payload: Number(id) }); // using Number method to convert id from string to number
  }, [id]);

  const navigate = useNavigate();

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>city name</h6>
        <h3>
          <span>{state.currentCity.countryFlag}</span>
          {state.currentCity.cityName}
        </h3>
      </div>
      {state.currentCity.notes && (
        <div className={styles.row}>
          <h6>your notes</h6>
          <p>{state.currentCity.notes}</p>
        </div>
      )}
      <div className={styles.row}>
        <h6> you went to {state.currentCity.cityName} on</h6>
        <p>{formatDate(state.currentCity.date || new Date())}</p>
      </div>
      <div className={styles.row}>
        <h6>learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${state.currentCity.cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {state.currentCity.cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div>
        <Button
          type="button"
          styleType="back"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default CityInfo;
