import React, { Component } from 'react';

class SearchBar extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const value = JSON.stringify(event.target.elements.location.value.trim());
    localStorage.setItem('query', value)
    const query = JSON.parse(localStorage.getItem('query'));
    if (query) {
      this.props.handleSubmit(query);
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