import React from 'react';

const Now = (props) => {
  const temperatureUnitIcon = props.unit === 'fahrenheit' ? 'wi-fahrenheit' : 'wi-celsius'
  return (
    <div className="now-container">
      <i className={`icon wi wi-forecast-io-${props.icon}`}></i>
      <span className="temperature">{props.temperature}<i className={`wi ${temperatureUnitIcon}`}></i></span>
    </div>
  )
}

export default Now