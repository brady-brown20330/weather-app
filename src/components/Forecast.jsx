import React from "react";

const Forecast = (props) => {

  if (!props.cityWeather.consolidated_weather) {
    return (
      <div></div>
    )
  }
  return (
    // <div>{props.cityWeather.consolidated_weather ? `${props.cityWeather.parent.title} is currently experiencing ${props.cityWeather.consolidated_weather[0].weather_state_name}` : null}</div>
    <div>
      <h1>{`Weather for the ${props.cityWeather.location_type} of ${props.cityWeather.title}, ${props.cityWeather.parent.title} (${props.cityWeather.timezone_name})`}</h1>
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
          <div>{`${date.weather_state_name} ${date.predictability}% chance`}</div>
          <div>{`Wind from the ${date.wind_direction_compass} at ${Math.round(date.wind_speed)} MPH`}</div>
          <div>{`Visibility ${Math.round(date.visibility)} miles`}</div>
        </div>
      )
    })
}