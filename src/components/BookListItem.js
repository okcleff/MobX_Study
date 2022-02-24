import React, { Component } from "react";
import { Paper, Grid, Typography } from "@mui/material";

export default class BookListItem extends Component {
  render() {
    const { book } = this.props;
    return (
      <Paper>
        <Grid container spacing={2}>
          <Grid item>
            <img src={book.imgUrl} alt="book cover" />
          </Grid>
          <Grid item>
            <Typography component="h5" variant="h5">
              {book.title}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
