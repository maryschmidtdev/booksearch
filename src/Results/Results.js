import React, { Component } from "react";
import "./Results.css";
import Book from "../Book/Book";

class Results extends Component {
  render() {
    const createBook = this.props.books.map((book) => {
      console.log(book);
      return (
        <div>
          <Book
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            categories={book.volumeInfo.categories}
            description={book.volumeInfo.description}
          />
        </div>
      );
    });
    return <div>{createBook}</div>;
  }
}
export default Results;
