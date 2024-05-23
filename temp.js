import React, { useEffect, useState } from "react";
import "./style.css";
import Weathercard from "./weathercard";

const Temp = () => {
  const [Searchvalue, setSearchvalue] = useState("chandigarh");
  const [tempinfo, settempinfo] = useState({});
  const getweatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${Searchvalue}&units=metric&appid=16eb914e8caf59301a397f8bdfa505d9`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      settempinfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getweatherInfo();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={Searchvalue}
            onChange={(e) => setSearchvalue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getweatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      <Weathercard tempinfo={tempinfo} />;
    </>
  );
};

export default Temp;
