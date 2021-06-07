import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class CardMediaMaterial extends Component {
  static propTypes = {};

  render() {
    return (
      <Card
        style={{ width: "90%" }}
        onClick={() => {
          this.props.onClickAction(this.props.ActionDetails.View);
        }}
      >
        <CardActionArea>
          <CardMedia
            style={{ height: "150px" }}
            image={this.props.ActionDetails.Img}
            title="Contemplative Reptile"
          />

          <CardContent>
            <div style={{ fontSize: "16px" }}>
              {this.props.ActionDetails.Action}
            </div>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
    );
  }
}

export default CardMediaMaterial;
