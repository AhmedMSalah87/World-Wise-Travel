import React, { useContext, useEffect, useState } from "react";
import { CitiesContext } from "./CitiesContext"; // curly braces is a must as it is named export
import styles from "./Form.module.css";
import { useNavigate, useSearchParams } from "react-router";
import Button from "./Button";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const Form = () => {
  const [cityName, setCityName] = useState(""); //any initial value prop for any input cant be null
  const [searchParams] = useSearchParams();
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [country, setCountry] = useState("");
  const [countryFlag, setCountryFlag] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(CitiesContext);
  const navigate = useNavigate();
  // const [error, setError] = useState("");

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(() => {
    const fetchCityInfo = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        const result = await response.json();
        setCityName(result.city || result.locality);
        setCountry(result.countryName);
        setCountryFlag(convertToEmoji(result.countryCode));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCityInfo();
  }, [lat, lng]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    dispatch({
      type: "ADD_CITY",
      payload: { id, cityName, date, countryFlag, lat, lng, country },
    });
    navigate("/app/cities");
  };

  return (
    <form
      className={`${styles.form} ${isLoading ? styles.loading : ""}`}
      onSubmit={handleFormSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="city">City name</label>
        <input
          id="city"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <span className={styles.flag}>{countryFlag}</span>
      </div>
      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="note">Notes about your trip to {cityName}</label>
        <textarea
          id="note"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        ></textarea>
      </div>
      <div className={styles.buttons}>
        <Button type="submit" styleType="primary">
          ADD
        </Button>
        <Button
          type="button"
          styleType="back"
          onClick={(e) => {
            e.preventDefault();
            console.log("Back button clicked");
            navigate(-1);
          }}
        >
          back
        </Button>
      </div>
    </form>
  );
};

export default Form;
