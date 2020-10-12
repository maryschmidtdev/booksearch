import React, { Component } from "react";
import Header from "./Header/Header";
import "./App.css";
import Search from "./Search/Search";
import Results from "./Results/Results";
// import Books from "./Books/Books";

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
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  }

  render() {
    return Object.keys(this.state.bookData).length ? (
      <main>
        <div className="App">
          <Header />
          <Search />

          <Results books={this.state.bookData.items} />
        </div>
      </main>
    ) : null;
  }
}

export default App;
