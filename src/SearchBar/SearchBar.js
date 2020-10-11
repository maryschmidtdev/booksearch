import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="search book">Search Books</label>
          <input
            id="search"
            type="text"
            placeholder="Lord of the Rings"
          ></input>
        </form>
        <button>Submit</button>
      </div>
    );
  }
}
export default SearchBar;
