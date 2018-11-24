import React from 'react';

const Hourly = (props) => {
  const date = new Date(props.time * 1000);
  const hours = date.getHours();
  return (
    <div className="hourly">
      <p>{hours}:00</p>
      <i className={`icon-small wi wi-forecast-io-${props.icon}`}></i>
      <p>{props.temperature}<i className="wi wi-celsius"></i></p>
      <p>{props.rain} mm</p>
      <p>{props.windSpeed} m/s</p>
      <p>{props.humidity}%</p>
    </div>
  )
}

export default Hourly;