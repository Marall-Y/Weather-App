import React from "react";

import "./Weather.css";

const Weather = ({ city, weather, error }) => {
  return (
    <div className={`weather ${weather.situation}`}>
      {city ? (
        <div className="weather-box">
          <p className="title">
            <span className="city">{city ? city : "Which City?"}</span>
            <span>{weather.country ? `,${weather.country}` : ""}</span>
          </p>
          <div className="temp">{weather.temp ? `${weather.temp}°C` : ""}</div>
          <p className="situation">
            {weather.situation ? weather.situation : ""}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
