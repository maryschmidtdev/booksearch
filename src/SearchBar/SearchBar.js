import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = { searchTerm: "" };

  setSearchTerm = (event) => {
    console.log(event.target.value, "targetvalue");
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="search book">Search Books</label>
          <input
            value={this.state.searchTerm}
            id="search"
            type="text"
            placeholder="Lord of the Rings"
            onChange={this.setSearchTerm}
          ></input>
        </form>
        <button
          id="submit"
          onClick={() => {
            this.props.query(this.state.searchTerm);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
export default SearchBar;
