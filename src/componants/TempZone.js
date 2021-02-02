import React from "react";
import Loading from "./Loading";
import sun from "../images/001lighticons-02.png";
import rain from "../images/001lighticons-18.png";
import cloud from "../images/001lighticons-14.png";
import thunder from "../images/001lighticons-16.png";
import snow from "../images/001lighticons-23.png";
import wind from "../images/001lighticons-06.png";
import other from "../images/001lighticons-13.png";

const weatherState = {
  Sun: sun,
  Rain: rain,
  Clouds: cloud,
  Thunder: thunder,
  Snow: snow,
  Wind: wind,
  Other: other,
};

let today = new Date().toLocaleDateString();

function TempZone({ name, main, sys, weather, loading }) {
  if (loading) {
    return <Loading />;
  }
  const findKey = (obj, state) => {
    for (const [key, value] of Object.entries(obj)) {
      if (key === state) {
        return value;
      }
    }
    return other;
  };

  if (weather) {
    return (
      <div className='temp-container'>
        <div className='time'>
          <h3>{today}</h3>
        </div>
        <div className='zone'>
          <h2 className='city'>{name},</h2>
          <h2 className='country'>{sys.country}</h2>
        </div>
        <div className='icon'>
          <img
            src={findKey(weatherState, weather[0].main)}
            alt={weather[0].main}
          />
        </div>
        <div className='degrees'>
          <h3>{Math.round(main.temp)}°</h3>
        </div>
      </div>
    );
  }
  return (
    <div className='temp-container'>
      <h3 className='no-match'>We can't find your search</h3>
    </div>
  );
}

export default TempZone;
