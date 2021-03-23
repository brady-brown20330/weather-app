import React from "react";

const Forecast = (props) => {
  console.log(props.cityWeather)

  if (!props.cityWeather.consolidated_weather) {
    return (
      <div></div>
    )
  }
  return (
    // <div>{props.cityWeather.consolidated_weather ? `${props.cityWeather.parent.title} is currently experiencing ${props.cityWeather.consolidated_weather[0].weather_state_name}` : null}</div>
    <div>
      <div>{`Weather for the ${props.cityWeather.location_type} of ${props.cityWeather.title}, ${props.cityWeather.parent.title}`}</div>
      <DailyForecast cityWeather={props.cityWeather}/>
    </div>
  )
}


export default Forecast;

const DailyForecast = (props) => {
  console.log('props in the daily forecast: ', props.cityWeather.consolidated_weather)
  return props.cityWeather.consolidated_weather.map((date) => {
      return (
        <div className='date-block' key={date.id}>
          <div>{date.applicable_date}</div>
          <div>{date.weather_state_name}</div>
        </div>
      )
    })
}