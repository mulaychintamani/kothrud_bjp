import React, { Component } from "react";
import PropTypes from "prop-types";
import { Box, Grid, TextField, IconButton, Button } from "@material-ui/core";
import AddUser from "./AddUser/AddUser";

export class NewUser extends Component {
  backToHome = () => {
    this.props.onClickAction("Default");
  };
  render() {
    return (
      <Grid container justify="center">
        <Grid item md={2} justify="flex-start">
          <Box m={2}></Box>
        </Grid>
        <Grid item md={8}>
          <Box m={2}>
            <h2>Search [By Adhar] / Add New Person</h2>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box m={2}>
            <Button
              variant="contained"
              onClick={() => this.props.onClickAction("Default")}
            >
              {" "}
              Back
            </Button>
          </Box>
        </Grid>
        <Grid item md={12}>
          <AddUser backToHome={this.backToHome} />
        </Grid>
      </Grid>
    );
  }
}
<TextField
  id="outlined-basic"
  label="Outlined"
  variant="outlined"
  size="small"
/>;

export default NewUser;
