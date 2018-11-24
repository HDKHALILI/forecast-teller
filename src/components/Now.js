import React from 'react';

const Now = (props) => {
  return (
    <div className="now-container">
      <i className={`icon wi wi-forecast-io-${props.icon}`}></i>
      <span className="temperature">{props.temperature}<i className="wi wi-celsius"></i></span>
    </div>
  )
}

export default Now