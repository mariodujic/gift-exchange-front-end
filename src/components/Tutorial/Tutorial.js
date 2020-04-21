import React from "react";
import Grid from "@material-ui/core/Grid";
import {colors, text} from "../../_utils";

let useStyles = {
  root: {
    width: "80vw"
  },
  item: {
    marginTop: "50px"
  },
  text: {
    color: colors.strongPink,
    marginBlockEnd: 0
  },
  image: {
    height: "300px",
    width: "300px"
  }
}

class Tutorial extends React.Component {
  render() {
    return <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        style={useStyles.root}>
      <Grid item style={useStyles.item}>
        <Grid container
              direction="column"
              justify="center"
              alignItems="center">
          <Grid item>
            <img
                style={useStyles.image}
                src="/images/tie.svg" alt=""/>
          </Grid>
          <Grid item>
            <h2 style={useStyles.text}>{text.tutorialOne}</h2>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={useStyles.item}>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
          <Grid item>
            <img
                style={useStyles.image}
                src="/images/baloons.svg" alt=""/>
          </Grid>
          <Grid item>
            <h2 style={useStyles.text}>{text.tutorialTwo}</h2>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={useStyles.item}>
        <Grid container
              direction="column"
              justify="center"
              alignItems="center">
          <Grid item>
            <img
                style={useStyles.image}
                src="/images/gift_2.svg" alt=""/>
          </Grid>
          <Grid item>
            <h2 style={useStyles.text}>{text.tutorialThree}</h2>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  }
}

export default Tutorial;
