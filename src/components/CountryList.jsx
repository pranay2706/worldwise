/* eslint-disable react/prop-types */

import React from "react";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CityContext";

export default function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="add your first city" />;

  const countries = cities.reduce((arr, city) => {
    const found = arr.find((el) => el.country === city.country);
    if (!found) {
      arr.push({ country: city.country, emoji: city.emoji });
    }
    return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries?.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
