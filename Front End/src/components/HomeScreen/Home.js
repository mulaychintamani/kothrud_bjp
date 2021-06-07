import { Grid } from "@material-ui/core";
import React from "react";
import Card from "../Commom/Card/CardMediaMaterial";
import NewUser from "../NewUser/NewUser";
import UserList from "../ViewList/ViewList";
import "./Home.css";
import { ActionDetails } from "../../public/constant/appConstant";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedView: "Default",
    };
  }

  ChangeView = (View) => {
    this.setState({ selectedView: View });
  };

  render() {
    const { selectedView } = this.state;
    return (
      <>
        {selectedView === "Default" ? (
          <div className="home_body">
            <Grid container justify="center" className="home_body_menu">
              {ActionDetails.map((value, index) => (
                <Grid
                  item
                  md={3}
                  className="home_body_card"
                  key={"home" + index}
                >
                  <Card ActionDetails={value} onClickAction={this.ChangeView} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : null}
        {selectedView === "ADD" ? (
          <NewUser onClickAction={this.ChangeView} />
        ) : null}
        {selectedView === "VIEW" ? (
          <UserList onClickAction={this.ChangeView} />
        ) : null}
      </>
    );
  }
}

export default Home;
