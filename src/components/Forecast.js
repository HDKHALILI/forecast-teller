import React from 'react';

import Daily from './Daily';
import Loading from './Loading';

const Forecast = (props) => {
  const { daily, location, error, loading } = props;
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
        <div className="error">
          {error || 'Enter location to get weather'}
        </div>
      }
    </div>

  )
}
  
export default Forecast;