import React, { Component } from "react";
import BookListItem from "./BookListItem";
import { List } from "@mui/material";

class BookList extends Component {
  render() {
    const { books, onSelectedBook } = this.props;
    const bookItems = books.map((book) => {
      return (
        <BookListItem
          book={book}
          key={book.ISBN}
          onSelectedBook={onSelectedBook}
        />
      );
    });

    return <List>{bookItems}</List>;
  }
}

export default BookList;
