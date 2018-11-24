import React, { Component } from 'react';

class SearchBar extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.elements.location.value.trim();
    if (location) {
      this.props.handleSubmit(location);
    }
  }

  render() {
    return (
      <div>
        <form className="search-bar" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Sydney" name="location" className="input"/>
          <button className="button">Get Weather</button>
        </form>
      </div>
    )
  }
}

export default SearchBar;