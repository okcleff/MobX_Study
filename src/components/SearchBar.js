import React, { Component } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

export default class SearchBar extends Component {
  render() {
    const { onSearchTitle } = this.props;

    return (
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        onChange={(e) => onSearchTitle(e.target.value)}
      />
    );
  }
}
