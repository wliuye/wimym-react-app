import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "partly-cloud-day": "PARTLY_CLOUDY_DAY",
    "partly-cloud-night": "PARTLY_CLOUDY_NIGHT",
    "cloudy-day": "CLOUDY",
    "cloudy-night": "CLOUDY",
    "rainy-day": "RAIN",
    "rainy-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "fog-day": "FOG",
    "fog-night": "FOG",
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
