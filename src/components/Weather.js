import React from 'react';

import SunDetails from './SunDetails';
import Info from './Info';
import ExtraDetails from './ExtraDetails';
import Now from './Now';
import Hourly from './Hourly';

const Weather = (props) => {
  const { location, currently, hourly } = props
  const { time, temperature, icon, windSpeed, humidity, rain, sunrise, sunset, summary } = currently;
  console.log(rain);
  return (
    <div className="weather-container">
    {temperature 
      ? <div>
          <div className="top-section">
            <Info time={time} location={location} summary={summary} />
            <SunDetails sunrise={sunrise} sunset={sunset} />
          </div>
          <div className="main">
            <Now icon={icon} temperature={temperature}/>
            <ExtraDetails windSpeed={windSpeed} humidity={humidity} rain={rain} />
          </div>
          <div className="hourly-container">
            {hourly.map((data, index) => (
              <Hourly
                key={data.time}
                time={data.time}
                icon={data.icon}
                temperature={data.temperature}
                rain={data.rain}
                windSpeed={data.windSpeed}
                humidity={data.humidity}/>))}
          </div>
        </div>
      : <p className="error">Enter city name to get Weather</p>
    }
    </div>
  )
}

export default Weather;