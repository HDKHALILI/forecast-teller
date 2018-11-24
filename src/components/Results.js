import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import Weather from './Weather';
import Forecast from './Forecast';

class Results extends Component {
  render() {
    const { location, currently, hourly, daily } = this.props.data;
    return(
      <Router>
        <div className="results-container">
          <div className="nav">
            <NavLink exact activeClassName="active" to="/">Today</NavLink>
            <NavLink activeClassName="active" to="/forecast">Forecast</NavLink>
          </div>

        <div className="results">
          <Switch>
            <Route 
              exact 
              path="/" 
              render={(props) => (
                <Weather {...props} 
                  currently={currently}
                  location={location}
                  hourly={hourly}/>
                )} />
            <Route path="/forecast" component={Forecast} />
          </Switch>
        </div>
        </div>
      </Router>
    )
  }
}

export default Results;