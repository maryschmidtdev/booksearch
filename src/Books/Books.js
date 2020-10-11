import React, { Component } from "react";
import "./Books.css";

class Books extends Component {
  render() {
    return (
      <div className="book-div">
        <h1>Book title</h1>
        <p>Author:</p>
        <p>Price:</p>
        <p>Description</p>
      </div>
    );
  }
}
export default Books;
