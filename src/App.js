import React, { useState, useEffect } from "react";
import SearchBar from "./componants/SearchBar";
import TempZone from "./componants/TempZone";

import { api } from "./api/api";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getWeather = (query) => {
    fetch(`${api.URL}${query}&units=metric${api.KEY_API}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWeather("bruxelles");
  }, []);

  console.log(data);

  return (
    <div className='app'>
      <div
        className={
          typeof data.main != "undefined"
            ? data.main.temp > 18
              ? "container warm"
              : "container cold"
            : "container"
        }
      >
        <SearchBar
          setData={setData}
          getWeather={getWeather}
          setLoading={setLoading}
        />
        <TempZone {...data} loading={loading} />
      </div>
    </div>
  );
}

export default App;
