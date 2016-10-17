import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange(inputText) {
    this.props.onUserInput(inputText);
  }

  render () {
    return (
      <div className="form-group row">
        <label htmlFor="search-input" className="col-sm-2 col-form-label">Filter by username:</label>
        <div className="col-sm-10">
          <input
            className="form-control"
            id="search-input"
            type="text"
            placeholder="Search Camper..."
            value={this.props.filterText}
            onChange={event => this.handleChange(event.target.value)} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
