import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './Search-bar';

const Header = (props) => {
  return (
    <div className="header">
      <Link exact to="/" className="title">Forecast Teller</Link>
      <div className="units">
        <input type="radio" name="units" value="celsius" defaultChecked id="celsius" onChange={props.handleUnitChange}/>
        <label htmlFor="celsius" className="unit-label unit-deselected"><i className="wi wi-celsius"></i></label>
        <input type="radio" name="units" value="fahrenheit" id="fahrenheit" onChange={props.handleUnitChange}/>
        <label htmlFor="fahrenheit" className="unit-label unit-selected"><i className="wi wi-fahrenheit"></i></label>
        <span className="unit-selection"></span>
      </div>
      <SearchBar handleSubmit={props.handleSubmit} />
    </div>
  )
};

export default Header;