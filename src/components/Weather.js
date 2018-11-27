import React from 'react';

import SunDetails from './SunDetails';
import Info from './Info';
import ExtraDetails from './ExtraDetails';
import Now from './Now';
import Hourly from './Hourly';
import Loading from './Loading';
import convertTempUnit from '../utils/celsiusToFahrenheit';

const Weather = (props) => {
  const { location, currently, hourly, error, loading, unit } = props
  const { time, icon, windSpeed, humidity, rain, sunrise, sunset, summary } = currently;
  const temperature = convertTempUnit(unit, currently.temperature);
  return (
    <div className="weather-container">
    {temperature 
      ? <div>
          <div className="top-section">
            <Info time={time} location={location} summary={summary} />
            <SunDetails sunrise={sunrise} sunset={sunset} />
          </div>
          <div className="main">
            <Now icon={icon} temperature={temperature} unit={unit}/>
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
                humidity={data.humidity}
                unit={unit}/>))}
          </div>
        </div>
      : <div className="error">
          {error || 'Enter location to get weather'}
        </div>
    }
    </div>
  )
}

export default Weather;