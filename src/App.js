import React, { useState } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";
import Alert from "./components/Alert/Alert";

const App = () => {
  // ********* States ***********//
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    country: "",
    temp: "",
    situation: "",
  });
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  // ****** Functions *********//

  const setCityHandler = (e) => {
    setCity(e.target.value);
    setValue(e.target.value);
  };

  const weatherHandler = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          `/weather?q=${city}&units=metric&appid=e643ad596da2aa08b9051f4455cfd491`
        )
        .then((response) => {
          setWeather({
            country: response.data.sys.country,
            temp: response.data.main.temp,
            situation: response.data.weather[0].main,
          });

          console.log(response);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 2000);
        });
      setValue("");
    }
  };
  const search = () => {
    axios
      .get(
        `/weather?q=${city}&units=metric&appid=e643ad596da2aa08b9051f4455cfd491`
      )
      .then((response) => {
        setWeather({
          country: response.data.sys.country,
          temp: response.data.main.temp,
          situation: response.data.weather[0].main,
        });

        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      });
    setValue("");
  };

  return (
    <>
      <Header />
      {error ? <Alert /> : null}
      <Search
        weatherHandler={weatherHandler}
        setCity={setCityHandler}
        search={search}
        value={value}
      />
      <Weather city={city} error={error} weather={weather} />
    </>
  );
};

export default App;
