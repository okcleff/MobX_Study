import React, { Component } from "react";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import BookDetail from "./components/BookDetail";
import Books from "./static_data/Books";
import { Container, Grid } from "@mui/material";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: Books,
      selectedBook: Books[0],
    };
  }

  onSearchTitle(title) {
    let updateList = Books;
    updateList = updateList.filter((book) => {
      return book.title.toLowerCase().search(title.toLowerCase()) !== -1;
    });

    this.setState({
      books: updateList,
    });
  }

  onSelectedBook(book) {
    this.setState({
      selectedBook: book,
    });
  }

  render() {
    const { books, selectedBook } = this.state;

    return (
      <Container>
        <SearchBar onSearchTitle={this.onSearchTitle.bind(this)} />
        <Grid container spacing={2}>
          <Grid item>
            <BookList
              books={books}
              onSelectedBook={this.onSelectedBook.bind(this)}
            />
          </Grid>
          <Grid item>
            <BookDetail book={selectedBook} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;
