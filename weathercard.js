import React, { useEffect, useState } from "react";

const Weathercard = ({ tempinfo }) => {
  const [weatherstate, setweatherstate] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempinfo;
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timestr = `${date.getHours()}:${date.getMinutes()}`;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setweatherstate("wi-day-cloudy");
          break;
        case "Fog":
          setweatherstate("wi-fog");
          break;
        case "clear":
          setweatherstate("wi-day-sunny");
          break;
        case "Mist":
          setweatherstate("wi-dust");
          break;

        default:
          setweatherstate("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherstate}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                <br />
                Sunset {timestr}
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                <br />
                humidity {humidity}
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-rain"></i>
              </p>
              <p className="extra-info-leftside">
                <br />
                Pressure {pressure}
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="extra-info-leftside">
                <br />
                wind Speed {speed}
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
