import React, { Component } from "react";
import "./SearchFilter.css";

class SearchFilter extends Component {
  render() {
    return (
      <form>
        <h2>Print Type:</h2>
        <select name="All">
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <h2>Book Type:</h2>
        <select name="Filter">
          <option value="partial">Partial</option>
          <option value="full">Full</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="paid-ebooks">Paid eBooks</option>
          <option value="ebooks">eBooks</option>
        </select>
      </form>
    );
  }
}
export default SearchFilter;
