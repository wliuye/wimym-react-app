import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
    <div className="weather-search">
        <form>
            <input type="search" placeholder="Enter a city" className="search-engine"/>
            <input type="submit" value="Search" className="search-button"/>
        </form>
      <div className="Weather">
        <h1 className="weather-city">Quito</h1>
        <div className="weather-temperature">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png"
            alt="mostly cloudy"
          />
          8°C
        </div>
        <div className="weather-description">
          <ul>
            <li>Wednesday 18:57, light rain</li>
            <li>Humidity: 94%, Wind: 1.54km/h</li>
          </ul>
        </div>
      </div>
      </div>
    );
}
