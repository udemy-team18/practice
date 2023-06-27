import { API_KEY } from "./Api";
import React, { useState, useEffect } from "react";

console.log(API_KEY);
function Weathers() {
  const [weather, setWeather] = useState("");
  // const API_KEY = "f8d4a48d6bd796048c19751bc6d022a6";

  const getWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        setWeather(`${temperature} @ ${place}`);
      });
  };

  const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  };

  const handleGeoError = () => {
    console.log("failed!");
  };

  const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  };

  useEffect(() => {
    askForCoords();
  }, []);

  return <div className="js-weather">{weather && <p>{weather}</p>}</div>;
}

export default Weathers;
