import React, { Component } from "react";
import "./Results.css";
import Books from "../Books/Books";

class Results extends Component {
  render() {
    const title = this.state.bookData.items.volumeInfo.title;
    const authors = this.state.bookData.items.volumeInfo.authors;
    const amount = this.state.bookData.items.saleInfo.retailPrice.amount;
    const currency = this.state.bookData.items.saleInfo.retailPrice
      .currencyCode;
    const description = this.state.bookData.items.volumeInfo.description;

    const book = this.props.state.bookData.map(
      <Books
        title={title}
        authors={authors}
        amount={amount}
        currency={currency}
        description={description}
      />
    );
    return (
      <div>
        <Books />
      </div>
    );
  }
}
export default Results;
