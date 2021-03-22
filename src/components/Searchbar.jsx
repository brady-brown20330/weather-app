import React from "react";

const SearchBar = (props) => {

  return (
    <form onClick={function(event) {event.preventDefault()}}>
      <input onChange={props.changeHandler}></input>
      <button onClick={props.clickHandler}>Search</button>
    </form>
  )
}

export default SearchBar;