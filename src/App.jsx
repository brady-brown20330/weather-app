import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchBar from './components/Searchbar';
import CityButtons from './components/CityButtons';

const App = (props) => {
  //state to track the text in the searchbar
  const [searchText, setSearchText] = useState('')
  //state to track what the API is getting
  const [cities, setCities] = useState([])

  //event handler to set searchbar text
  const searchBarHandler = (e) => {
    setSearchText(e.target.value)
  }

  //event handler for the  search button
  const searchButtonHandler = () => {
    axios.get(`https://www.metaweather.com/api/location/search/?query=`, { params: { data: searchText } })
    .then(res => {
      setCities(res.data)
    })
  }


  return (
    <div className='app'>
      <h1>Hello Weather Boy</h1>
      <SearchBar clickHandler={searchButtonHandler} changeHandler={searchBarHandler.bind(this)}/>

      <CityButtons cities={cities}/>
    </div>
  )
}

export default App;