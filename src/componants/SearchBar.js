import React, { useState, useRef } from "react";

function SearchBar({ getWeather }) {
  const [city, setCity] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      getWeather(city);
      setCity("");
    }
  };

  return (
    <>
      <form className='search-bar' onSubmit={handleSubmit}>
        <input
          type='text'
          id='search'
          name='search'
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder='type your seach...'
        />
        <button type='submit' className={focused ? "btn-focus" : ""}>
          Get Weather
        </button>
      </form>
    </>
  );
}

export default SearchBar;
