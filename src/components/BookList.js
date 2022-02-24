import React, { Component } from "react";
import BookListItem from "./BookListItem";
import { List, ListItem } from "@mui/material";

class BookList extends Component {
  render() {
    const { books } = this.props;

    return (
      <List>
        <ListItem>
          <BookListItem book={books[0]} />
        </ListItem>
        <ListItem>Item 02</ListItem>
        <ListItem>Item 03</ListItem>
      </List>
    );
  }
}

export default BookList;
