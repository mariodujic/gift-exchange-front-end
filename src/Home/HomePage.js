import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {commonStyles} from "../_utils";

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
  image: {
    top: 0,
    right: 0,
    position: "absolute",
    height: "300px",
    width: "300px",
  }
}

class HomePage extends React.Component {

  render() {
    return (
        <div>
          <Navigation title="HomePage"/>
          <img
              style={useStyles.image}
              src="/images/flags.svg" alt=""/>
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
              <p style={useStyles.text}>You enroll at the bottom of this page to participate in gift exchange.
                You will be matched with another registered user and you will be able to communicate with him in
                order to get the best experience. Your personal data will not be revealed,
                if you not chose to do so. User you are matched with will only be able to see your username and
                your characteristics to ensure the best experience for you and your giftee.</p>
            </Grid>
            <Grid item>
              <p style={useStyles.text}>Keep in mind that before you enroll for gift exhange, you will have to
                complete a survey that will help us to find you a best match possible at the giving moment.</p>
            </Grid>
            <Grid item>
              <Button
                  variant="contained"
                  style={useStyles.button}
                  type="button"
              >Complete Survey</Button>
            </Grid>
          </Grid>
        </div>
    );
  }
}

export {HomePage}
