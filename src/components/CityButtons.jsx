import axios from "axios";
import React, { useEffect, useState } from "react";


/*
1. make a new server endpoint that takes in woeids
2. add onClick to each button that uses new APi endpoint
3. render raw json so people can see the weather
*/
const CityButtons = (props) => {
  const [cityWeather, setCityWeather] = useState({});

  const cityButtonHandler = (id) => {
    axios.get('/weatherByLoc', { params: { data: id } })
    .then(res => {
    setCityWeather(res.data)
    })
  }

  if (props.cities.length < 1) {
    return (<div>Nothing Found in Props</div>)
  }


  return (
    <div>
      <div>{cityWeather.consolidated_weather ? `${cityWeather.parent.title} is currently experiencing ${cityWeather.consolidated_weather[0].weather_state_name}` : null}</div>
      <Buttons cities={props.cities} cityButtonHandler={cityButtonHandler}/>
    </div>
  )
}

export default CityButtons;

const Buttons = (props) => {
  return props.cities.map(city => {
    return (
      <div>
        <button key={city.woeid} onClick={() => props.cityButtonHandler(city.woeid)}>{city.title}</button>
      </div>
    )
})};