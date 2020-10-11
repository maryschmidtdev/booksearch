import React, { Component } from "react";
import "./SearchFilter.css";

class SearchFilter extends Component {
  render() {
    return (
      <form>
        <h2>Print Type:</h2>
        <select name="All">
          <option value="one">One</option>
          <option value="two">Two</option>
        </select>
        <h2>Book Type:</h2>
        <select>
          <option value="No Filter">No Filter</option>
          <option value="Filter">Filter</option>
        </select>
      </form>
    );
  }
}
export default SearchFilter;
