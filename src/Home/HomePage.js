import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {colors, commonStyles} from "../_utils";
import Paper from "@material-ui/core/Paper";

const useStyles = {
  content: {
    width: "100%",
    padding: "50px"
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
          <Navigation title="HomePage"/>
          <img
              style={useStyles.fixedImage}
              src="/images/flags.svg" alt=""/>

          <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems="center"
              style={useStyles.content}
              className="topMargin">
            <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
                style={useStyles.content}>
              <Grid item>
                <h1 style={useStyles.title}>So how does it work?</h1>
              </Grid>
              <Grid item>
                <p style={useStyles.text}>Click at the bottom of the page to participate in gift exchange.
                  You will be matched with another user to exchange gifts over postal office.
                  Your personal data will not be revealed at any time. User you are matched with will only be able to
                  see
                  your username and your characteristics to ensure the best experience for you and your giftee.
                  Once we find you a match, we will notify you here and you will also receive an email. </p>
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
                  <p style={useStyles.text}>Keep in mind that before you enroll for gift exchange, you have to
                    complete a survey that will help us find you a best match possible at any giving moment.</p>
                </Grid>
                <Grid item>
                  <Button
                      variant="contained"
                      style={useStyles.button}
                      type="button"
                  >Complete Survey</Button>
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
                <p style={useStyles.text}>To are eligible to participate in gift exchange. Click here to enroll in
                  gift exchange. It might take time to match you with another user, so please be patient. You can
                  always
                  cancel an enrolment at the top right corner of the screen.</p>
              </Grid>
              <Grid item>
                <Button
                    variant="contained"
                    style={useStyles.giftExchangeButton}
                    type="button"
                >Exchange gifts</Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
    );
  }
}

export {HomePage}
