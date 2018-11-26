import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './Search-bar';

const Header = (props) => {
  return (
    <div className="header">
      <Link exact to="/" className="title">Forecast Teller</Link>
      <SearchBar handleSubmit={props.handleSubmit} />
    </div>
  )
};

export default Header;