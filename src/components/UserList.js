import React, { Component } from "react";
import { Button, List, ListItemText } from "@mui/material";
import axios from "axios";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ id: "", name: "" }],
      title: "",
    };
  }

  loadUsers() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({
        users: res.data,
      });
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.title !== prevState.title
      ? { title: nextProps.title }
      : null;
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    const { users, title } = this.state;
    const userList = users.map((user) => {
      return <ListItemText primary={user.name} key={user.id} />;
    });

    return (
      <div>
        <h1>{title}</h1>
        {/* <Button
          variant="contained"
          color="primary"
          onClick={this.loadUsers.bind(this)}
        >
          Load
        </Button> */}
        <List>{userList}</List>
      </div>
    );
  }
}
