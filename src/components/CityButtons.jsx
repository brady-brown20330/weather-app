import axios from "axios";
import React, { useEffect, useState } from "react";
import Forecast from './Forecast';

/*
1. make a new server endpoint that takes in woeids
2. add onClick to each button that uses new APi endpoint
3. render raw json so people can see the weather
*/
const CityButtons = (props) => {
  const [cityWeather, setCityWeather] = useState({});

  const cityButtonHandler = (id) => {
    axios.get('https://www.metaweather.com/api/location/', { params: { data: id } })
    .then(res => {
    setCityWeather(res.data)
    })
  }

  if (props.cities.length < 1) {
    return (<div>Nothing Found</div>)
  }


  return (
    <div>
      <Forecast cityWeather={cityWeather}/>
      <Buttons cities={props.cities} cityButtonHandler={cityButtonHandler}/>
    </div>
  )
}

export default CityButtons;

const Buttons = (props) => {
  return props.cities.map(city => {
    return (
        <button key={city.woeid} onClick={() => props.cityButtonHandler(city.woeid)}>{city.title}</button>
    )
})};