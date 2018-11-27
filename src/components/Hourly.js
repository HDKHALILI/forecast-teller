import React from 'react';

import convertTempUnit from '../utils/celsiusToFahrenheit';

const Hourly = (props) => {
  const date = new Date(props.time * 1000);
  const hours = date.getHours();
  const temperature = convertTempUnit(props.unit, props.temperature);
  const temperatureUnitIcon = props.unit === 'fahrenheit' ? 'wi-fahrenheit' : 'wi-celsius'

  return (
    <div className="hourly">
      <p>{hours}:00</p>
      <i className={`icon-small wi wi-forecast-io-${props.icon}`}></i>
      <p>{temperature}<i className={`wi ${temperatureUnitIcon}`}></i></p>
      <p>{props.rain} mm</p>
      <p>{props.windSpeed} m/s</p>
      <p>{props.humidity}%</p>
    </div>
  )
}

export default Hourly;