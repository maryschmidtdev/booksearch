import React, { Component } from "react";
import Header from "./Header/Header";
import "./App.css";
import Search from "./Search/Search";
import Results from "./Results/Results";
import Books from "./Books/Books";

const url =
  "https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyDAsJd2FKDaWfHHb5cCddBEUTvIzkQurmA";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookData: {},
    };
  }
  componentDidMount() {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ bookData: data });
        console.log(this.state.bookData);
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  }
  handleSearch(event) {
    const { name, value } = event.target;
    this.setState({ search: value });
  }
  handlePrintType(event) {
    const { name, value } = event.target;
    this.setState({ "print type": value });
  }
  handleBookType(event) {
    const { name, value } = event.target;
    this.setState({ "book type": value });
  }
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
      <main>
        <div className="App">
          <Header />
          <Search />
          <Results bookData={this.state.bookData} />
          {book}
        </div>
      </main>
    );
  }
}

export default App;
