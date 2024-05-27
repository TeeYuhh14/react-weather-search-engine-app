import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [windSpeed, setWindSpeed] = useState(null);
  let [city, setCity] = useState("");
  let [icon, setIcon] = useState("");

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWindSpeed(response.data.main.wind_speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6a48a550fc04f170639e60d52b8a6bc5&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input onChange={updateCity} type="text" placeholder="Enter City" />
      <button type="submit">Search</button>
    </form>
  );

  if (temperature) {
    return (
      <div className="Search">
        {form}
        <br></br>
        <img src={icon} />
        <br></br>
        {city}
        <ul>
          <li>Temperature: {Math.round(temperature)} °C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {windSpeed} km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
