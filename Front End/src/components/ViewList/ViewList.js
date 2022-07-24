import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Box, Button, Grid } from "@material-ui/core";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { URL_LOCAL } from "../../public/constant/appConstant";

export class ViewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }

  componentDidMount = () => {
    const res = axios
      .get("http://" + URL_LOCAL + "/getusers", {})
      .then((result) => {
        console.log("This Is Response", result);
        this.setState({ userList: result.data });
      });
  };

  createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
  };

  render() {
    const { userList } = this.state;
    return (
      <div>
        <Grid container justify="center">
          <Grid item md={2} justify="flex-start">
            <Box m={2}></Box>
          </Grid>
          <Grid item md={8}>
            <Box m={2}>
              <h2>All Users</h2>
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
          <Grid item md={8}>
            <Box mt={2}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <b fontWeight={500} m={1}>
                          Name
                        </b>
                      </TableCell>
                      <TableCell align="right">
                        <b fontWeight={500} m={1}>
                          Adhar Number
                        </b>
                      </TableCell>
                      <TableCell align="right">
                        <b fontWeight={500} m={1}>
                          Mobile
                        </b>
                      </TableCell>
                      <TableCell align="right">
                        <b fontWeight={500} m={1}>
                          Sevices
                        </b>
                      </TableCell>
                      <TableCell align="right">
                        <b fontWeight={500} m={1}>
                          Blood Group
                        </b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userList.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.adhar}</TableCell>
                        <TableCell align="right">{row.mob}</TableCell>
                        <TableCell align="right">
                          {row.services.map((value) => {
                            return value.title + " ";
                          })}
                        </TableCell>
                        <TableCell align="right">{row.bloodgroup}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ViewList;
