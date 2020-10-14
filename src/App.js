import React, { Component } from "react";
import Header from "./Header/Header";
import "./App.css";
import Search from "./Search/Search";
import Results from "./Results/Results";
// import Books from "./Books/Books";

const initialUrl =
  "https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyDAsJd2FKDaWfHHb5cCddBEUTvIzkQurmA";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookData: {},
    };
  }
  fetchBooks = (url) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ bookData: data });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  };

  componentDidMount() {
    this.fetchBooks(initialUrl);
  }

  handleSearch = (searchTerm) => {
    this.setState({ search: searchTerm });
    const newSearch = searchTerm.replace(" ", "+");
    this.fetchBooks(
      `https://www.googleapis.com/books/v1/volumes?q=${newSearch}&key=AIzaSyDAsJd2FKDaWfHHb5cCddBEUTvIzkQurmA`
    );
  };
  handlePrintType = (printValue) => {
    this.setState({ printType: printValue });
  };
  handleBookType = (bookValue) => {
    this.setState({ bookType: bookValue });
  };

  render() {
    return Object.keys(this.state.bookData).length ? (
      <main>
        <div className="App">
          <Header />
          <Search
            query={this.handleSearch}
            print={this.handlePrintType}
            type={this.handleBookType}
          />

          <Results books={this.state.bookData.items} />
        </div>
      </main>
    ) : (
      <h1>loading</h1>
    );
  }
}

export default App;
