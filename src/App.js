import React, { Component } from "react";
import BookList from "./components/BookList";
import Counter from "./components/Counter";
import Books from "./static_data/Books";

class App extends Component {
  render() {
    return (
      <div>
        <BookList books={Books} />
        <Counter />
      </div>
    );
  }
}

export default App;
