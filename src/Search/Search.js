import React, { Component } from "react";
import "./Search.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchFilter from "../SearchFilter/SearchFilter";

class Search extends Component {
  render() {
    return (
      <div>
        <SearchBar query={this.props.query} />
        <SearchFilter print={this.props.print} type={this.props.type} />
      </div>
    );
  }
}
export default Search;
