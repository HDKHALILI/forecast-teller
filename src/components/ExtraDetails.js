import React from 'react';

const ExtraDetails = (props) => {
  return (
    <div className="extra-details">
      <div>
        <i className="wi wi-raindrops"></i> {props.rain} mm
      </div>
      <div>
        <i className="wi wi-windy"></i> {props.windSpeed} m/s
      </div>
      <div>
        <i className="wi wi-humidity"></i> {props.humidity}%
      </div>
    </div>
  )
}

export default ExtraDetails;