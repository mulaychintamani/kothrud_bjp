import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { Box, Button, Grid } from "@material-ui/core";
import { TypeOfServiceAddForm } from "../../../public/constant/appConstant";
import axios from "axios";
export class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "search",
      name: "",
      adhar: "",
      address: "",
      mob: "",
      userList: "",
      bloodgroup: "",
      dob: "",
      services: [],
      userid: "",
    };
  }

  componentDidMount = () => {
    const res = axios
      .get("http://localhost:8081/getusers", {})
      .then((result) => {
        console.log("This Is Response", result);
        this.setState({ userList: result.data });
      });
  };

  setUserData = (data, fieldName) => {
    if (fieldName === "adhar") {
      this.searchOnAdhar(data);
    }
  };
  setselectData = (event, values) => {
    console.log(values);
    this.setState({ services: values });
  };

  searchOnAdhar = (adharNumbar) => {
    const user = this.state.userList.find((x) => x.adhar === adharNumbar);
    if (user !== undefined) {
      console.log(user);
      this.setState({
        type: "search",
        name: user.name,
        adhar: user.adhar,
        address: user.address,
        mob: user.mob,
        bloodgroup: user.bloodgroup,
        dob: user.dob,
        services: user.services,
      });
    } else {
      this.setState({
        type: "AddNew",
        name: "",
        adhar: adharNumbar,
        address: "",
        mob: "",
        bloodgroup: "",
        dob: "",
        services: [],
      });
    }
  };

  setOtherData = (value, fieldName) => {
    console.log(value, fieldName);
    if (fieldName === "name") this.setState({ name: value });
    if (fieldName === "mobile") this.setState({ mob: value });
    if (fieldName === "address") this.setState({ address: value });
    if (fieldName === "bloodgroup") this.setState({ bloodgroup: value });
    if (fieldName === "dob") this.setState({ dob: value });
  };

  updateUserRecord = () => {
    console.log("UpdateRecord");
  };

  createUserRecord = () => {
    const userDetails = {
      name: this.state.name,
      adhar: this.state.adhar,
      address: this.state.address,
      mob: this.state.mob,
      bloodgroup: this.state.bloodgroup,
      dob: this.state.dob,
      services: this.state.services,
    };

    axios
      .post("http://localhost:8081/addnewusers", userDetails)
      .then((response) => {
        if (response.status === 200) {
          alert("Record Updated");
          this.setState({
            name: "",
            adhar: "",
            address: "",
            mob: "",
            bloodgroup: "",
            dob: "",
            services: [],
          });
        }
      });
  };

  render() {
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    const {
      type,
      name,
      adhar,
      address,
      mob,
      userList,
      bloodgroup,
      dob,
      services,
    } = this.state;

    console.log(
      type,
      name,
      adhar,
      address,
      mob,
      userList,
      bloodgroup,
      dob,
      services
    );

    return (
      <>
        <Grid container justify="center">
          <Grid item md={8}>
            <Box m={2}>
              <TextField
                id="outlined-basic"
                label="Adhar Numer"
                variant="outlined"
                size="small"
                defaultValue={adhar || ""}
                fullWidth
                onBlur={(e) => {
                  this.setUserData(e.target.value, "adhar");
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item md={4}>
            <Box m={2}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                fullWidth
                value={name || ""}
                onChange={(e) => {
                  this.setOtherData(e.target.value, "name");
                }}
              />
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box m={2}>
              <TextField
                id="outlined-basic"
                label="Mobile"
                variant="outlined"
                size="small"
                fullWidth
                value={mob || ""}
                onChange={(e) => {
                  this.setOtherData(e.target.value, "mobile");
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item md={4}>
            <Box m={2}>
              <TextField
                id="outlined-basic1"
                label="Blood Group"
                variant="outlined"
                size="small"
                fullWidth
                value={bloodgroup || ""}
                onChange={(e) => {
                  this.setOtherData(e.target.value, "bloodgroup");
                }}
              />
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box m={2}>
              <TextField
                id="outlined-basic2"
                label="Birth Date"
                variant="outlined"
                size="small"
                fullWidth
                value={dob || ""}
                onChange={(e) => {
                  this.setOtherData(e.target.value, "dob");
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item md={8}>
            <Box m={2}>
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                size="small"
                fullWidth
                value={address || ""}
                onChange={(e) => {
                  this.setOtherData(e.target.value, "address");
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item md={8}>
            <Box m={2}>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={TypeOfServiceAddForm}
                disableCloseOnSelect
                fullWidth
                size="small"
                onChange={this.setselectData}
                value={this.state.services}
                getOptionLabel={(option) => option.title}
                renderOption={(option, { selected }) => (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Add  Services"
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid container>
            <Grid item md={9}></Grid>
            <Grid item md={2}>
              <Box>
                {type === "search" ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      this.updateUserRecord();
                    }}
                  >
                    Update Record
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      this.createUserRecord();
                    }}
                  >
                    Create Record
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default AddUser;