import React, { Component } from "react";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import Books from "./static_data/Books";
import { Container, Grid } from "@mui/material";

class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
        <Grid Container spacing={2}>
          <Grid item>
            <BookList books={Books} />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;
