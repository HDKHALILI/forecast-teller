import React from 'react';

import { getTime } from '../utils/dateTime';

const SunDetails = (props) => {
  const sunrise = getTime(props.sunrise);
  const sunset = getTime(props.sunset);
  return (
    <div className="sun-details">
      <div className="sunrise">{sunrise}<i className="wi wi-sunrise"></i></div>
      <span className="pipe">|</span>
      <div className="sunset"><i className="wi wi-sunset"></i>{sunset}</div>
    </div>
  )
}

export default SunDetails;