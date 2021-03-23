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
    console.log('searchbar: ', searchText)
  }

  //event handler for the  search button
  const searchButtonHandler = () => {
    axios.get(`/searchByName`, { params: { data: searchText } })
    .then(res => {
      console.log(res.data)
      setCities(res.data)
    })
  }

  // useEffect(() => {
  //   getLocID()
  // })

  return (
    <div>
      <h1>Hello Weather Boy</h1>
      <SearchBar clickHandler={searchButtonHandler} changeHandler={searchBarHandler.bind(this)}/>

      <CityButtons cities={cities}/>
    </div>
  )
}

export default App;