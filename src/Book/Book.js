import React, { Component } from "react";
import "./Book.css";

class Book extends Component {
  render() {
    return (
      <div className="book-div">
        <h1>{this.props.title}</h1>
        <p>{this.props.authors}</p>
        <p>{this.props.categories}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
export default Book;
