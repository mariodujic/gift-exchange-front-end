import React from "react";
import Grid from "@material-ui/core/Grid";
import {colors} from "../../_utils";

const useStyles = {
  root: {
    width: "80vw"
  },
  item: {
    marginTop: "50px"
  },
  text: {
    color: colors.warning,
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
            <h2 style={useStyles.text}>1. Sign up & get matched</h2>
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
            <h2 style={useStyles.text}>2. Find the perfect gift & send it</h2>
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
            <h2 style={useStyles.text}>3. Receive a gift from your match</h2>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  }
}

export default Tutorial;
