import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange(inputText) {
    this.props.onUserInput(inputText);
  }

  render () {
    return (
      <div>
        <input
          type="text"
          placeholder="Search Camper..."
          value={this.props.filterText}
          onChange={event => this.handleChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
