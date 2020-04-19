import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {buttonText, colors, commonStyles, text, titleText} from "../_utils";
import Paper from "@material-ui/core/Paper";

const useStyles = {
  contentRoot: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  content: {
    width: "100%",
    maxWidth: "900px",
    padding: "20px",
  },
  title: commonStyles.displayTitle,
  text: {
    fontSize: "140%"
  },
  button: commonStyles.actionButton,
  giftExchangeButton: {
    ...commonStyles.actionButton,
    background: colors.success,
    color: colors.light
  },
  fixedImage: {
    top: 0,
    right: 0,
    position: "absolute",
    height: "300px",
    width: "300px",
  },
  textImage: {
    height: "200px",
    width: "200px",
  }
}

class HomePage extends React.Component {

  render() {
    return (
        <div>
          <Navigation title={titleText.homePage}/>
          <img
              style={useStyles.fixedImage}
              src="/images/flags.svg" alt=""
              className="smallWidthRemoveElement"/>
          <div
              style={useStyles.contentRoot}>
            <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
                style={useStyles.content}>
              <Grid
                  container
                  direction="column"
                  justify="space-evenly"
                  alignItems="center"
                  style={useStyles.content}>
                <Grid item>
                  <h1 style={useStyles.title}>{titleText.howDoesItWork}</h1>
                </Grid>
                <Grid item>
                  <p style={useStyles.text}>{text.howDoesItWork}</p>
                </Grid>
              </Grid>
              <Paper elevation={3}
                     className="topMargin">
                <Grid
                    container
                    direction="column"
                    justify="space-evenly"
                    alignItems="center"
                    style={useStyles.content}>
                  <Grid item>
                    <p style={useStyles.text}>{text.incompleteSurvey}</p>
                  </Grid>
                  <Grid item>
                    <Button
                        variant="contained"
                        style={useStyles.button}
                        type="button"
                    >{buttonText.completeSurvey}</Button>
                  </Grid>
                </Grid>
              </Paper>
              <Grid
                  container
                  direction="column"
                  justify="space-evenly"
                  alignItems="center"
                  style={useStyles.content}>
                <Grid item>
                  <img
                      style={useStyles.textImage}
                      src="/images/spin.svg" alt=""/>
                </Grid>
                <Grid item>
                  <p style={useStyles.text}>{text.eligibleForGiftExchange}</p>
                </Grid>
                <Grid item>
                  <Button
                      variant="contained"
                      style={useStyles.giftExchangeButton}
                      type="button"
                  >{buttonText.exchangeGifts}</Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
    );
  }
}

export {HomePage}
