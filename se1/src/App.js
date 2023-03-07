import React, { useState } from "react";
import "./index";
import Navbar from "./Navbar";
import AboutUS from "./AboutUS";
import Contact from "./Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const api = {
  key: "34474c7d2fcfa05b34005071b4f099a9",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");

          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aguest",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Teusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.weather[0].main == "Mist"
            ? "App mist"
            : weather.main.temp < 0
            ? "App cold"
            : weather.main.temp > 30
            ? "App hot"
            : weather.weather[0].main == "Fog"
            ? "App fog"
            : weather.weather[0].main == "Clouds"
            ? "App clouds"
            : weather.weather[0].main == "Rain"
            ? "App rain"
            : weather.weather[0].main == "Clear"
            ? "App clear"
            : weather.weather[0].main == "Smoke"
            ? "App smoke"
            : weather.weather[0].main == "Haze"
            ? "App haze"
            : "App"
          : "App"
      }
    >
      <main>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" exact component={<App></App>} />
            <Route path="./AboutUS.js" exact component={<AboutUS></AboutUS>} />
            <Route path="./Contact" exact component={<Contact></Contact>} />
          </Routes>
        </BrowserRouter>

        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyUp={search}
          ></input>
        </div>

        {typeof weather.main != "undefined" ? (
          <div className>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="Mtemp">
                <i class="fa-solid fa-droplet"></i>
                <br></br>
                HUMIDITY<br></br>
                {weather.main.humidity}%
              </div>
              <div className="Mtemp">
                <i class="fa-solid fa-water"></i>
                <br></br>
                PRESSURE<br></br>
                {weather.main.pressure} mbar
              </div>
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="Mtemp">
                <i class="fa-solid fa-temperature-high"></i>
                <br></br>
                MAX TEMP<br></br>
                {weather.main.temp_max}°C
              </div>
              <div className="Mtemp">
                <i class="fa-solid fa-temperature-low"></i>
                <br></br>
                MIN TEMP<br></br>
                {weather.main.temp_min}°C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
              <div className="mtemp">
                FEELS LIKE<br></br>
                {weather.main.feels_like}°C
              </div>
              <div className="mtemp">
                <i class="fa-solid fa-wind"></i>
                <br></br>
                WIND SPEED<br></br>
                {weather.wind.speed} m/s
              </div>
              <div className="mtemp">
                GUST<br></br>
                {weather.wind.gust} knots
              </div>

              <div className="mtemp">
                <i class="fa-solid fa-eye"></i>
                <br></br>
                VISIBILITY<br></br>
                {weather.visibility} m
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
