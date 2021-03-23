import React from "react";

const Forecast = (props) => {
  console.log(props.cityWeather)
  return (
    <div>{props.cityWeather.consolidated_weather ? `${props.cityWeather.parent.title} is currently experiencing ${props.cityWeather.consolidated_weather[0].weather_state_name}` : null}</div>
  )
}

export default Forecast;