import React, { Component } from "react";
import { Box, Button } from "@mui/material";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={this.increment.bind(this)}
        >
          +
        </Button>
        <Box component="span" m={5}>
          {count}
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={this.decrement.bind(this)}
        >
          -
        </Button>
      </div>
    );
  }
}
