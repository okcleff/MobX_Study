import React, { Component } from "react";
import { Paper, Grid, Typography, ListItem } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = {
  listItem: {
    "&:hover": { cursor: "pointer" },
  },
  image: {
    width: 80,
    height: 100,
  },
  itemArea: {
    width: 360,
  },
};

class BookListItem extends Component {
  render() {
    const { book, classes, onSelectedBook } = this.props;

    return (
      <ListItem
        className={classes.listItem}
        onClick={() => onSelectedBook(book)}
      >
        <Paper>
          <Grid container spacing={2}>
            <Grid item>
              <img
                className={classes.image}
                src={book.imgUrl}
                alt="book cover"
              />
            </Grid>
            <Grid item className={classes.itemArea}>
              <Typography component="h5" variant="h5">
                {book.title}
              </Typography>
              <Typography gutterBottom>{book.author}</Typography>
              {/* <Typography color="textSecondary">{book.introduce}</Typography> */}
            </Grid>
          </Grid>
        </Paper>
      </ListItem>
    );
  }
}

export default withStyles(styles)(BookListItem);
