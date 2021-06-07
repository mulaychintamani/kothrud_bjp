import React, { Component } from "react";
import ProTypes from "prop-types";
import "./Footer.css";
import { Grid } from "@material-ui/core";
export class Footer extends Component {
  static propTypes = {};

  render() {
    return <Grid container className="footer_body" >
      <Grid item md={6}></Grid>
      <Grid item md={6} align="right" className="footer_copyright">© Copyright to BJP Kothrud LA 2021</Grid>
    </Grid>;
  }
}

export default Footer;
