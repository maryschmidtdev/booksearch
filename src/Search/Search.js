import React, { Component } from "react";
import "./Search.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchFilter from "../SearchFilter/SearchFilter";

class Search extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchFilter />
      </div>
    );
  }
}
export default Search;
