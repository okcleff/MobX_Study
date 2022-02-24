import React, { Component } from "react";
import BookListItem from "./BookListItem";
import { List, ListItem, Container } from "@mui/material";

class BookList extends Component {
  render() {
    const { books } = this.props;
    const bookItems = books.map((book) => {
      return (
        <ListItem key={book.ISBN}>
          <BookListItem book={book} />
        </ListItem>
      );
    });

    return (
      <Container maxWidth="sm">
        <List>{bookItems}</List>
      </Container>
    );
  }
}

export default BookList;
