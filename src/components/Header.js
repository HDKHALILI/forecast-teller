import React from 'react';

import SearchBar from './Search-bar';

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="title">Forecast Teller</h1>
      <SearchBar handleSubmit={props.handleSubmit} />
    </div>
  )
};

export default Header;