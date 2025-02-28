import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_SKY",
    "clear-sky-night": "CLEAR_SKY",
    "few-clouds-day": "FEW_CLOUDS",
    "few-clouds-night": "FEW_CLOUDS",
    "scattered-clouds-day": "SCATTERED_CLOUDS",
    "scattered-clouds-night": "SCATTERE_CLOUDS",
    "broken-clouds-day": "BROKEN_CLOUDS",
    "broken-clouds-night": "BROKEN_CLOUDS",
    "shower-rain-day": "SHOWER_RAIN",
    "shower-rain-night": "SHOWER_RAIN",
    "rain-day": "RAIN",
    "thunderstorm-day": "THUNDERSTORM",
    "thunderstorm-night": "THUNDERSTORM",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "MIST",
    "mist-night": "MIST",
  };
  
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="purple"
      size={64}
      animate={true}
    />
  );
}
