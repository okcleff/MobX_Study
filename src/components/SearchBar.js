import React, { Component } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

export default class SearchBar extends Component {
  render() {
    return (
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    );
  }
}
