import React from 'react';

import Daily from './Daily';

const Forecast = (props) => {
  const { daily, location, error } = props;
  return (
    <div>
      <div className="daily-container">
        {daily.length > 0 &&
          daily.map((data) => (
            <Daily key={data.time} data={data} location={location} />
          ))
        }
      </div>
      {daily.length === 0 &&
        <p className="error">{error || "Enter location to get weather"}</p>
      }
    </div>

  )
}
  
export default Forecast;