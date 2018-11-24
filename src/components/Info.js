import React from 'react';

import { getDate } from '../utils/dateTime';

const Info = (props) => {
  const date = getDate(props.time)
  return (
    <div className="info-container">
      <div className="date">
        <p className="month">{date.month}</p>
        <p className="day">{date.day}</p>
      </div>
      <div className="details">
        <h3>{props.location}</h3>
        <p className="summary">{props.summary}</p>
      </div>
    </div>
  )
}

export default Info;