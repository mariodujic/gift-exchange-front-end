import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {buttonText, colors, commonStyles, text, titleText} from "../_utils";
import Paper from "@material-ui/core/Paper";
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import TraitsSurvey from "../TraitsSurvey/TraitsSurvey";
import {userService} from "../_services";

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
  surveyContent: {
    width: "100%",
    maxWidth: "900px",
  },
  title: commonStyles.displayTitle,
  text: commonStyles.standardText,
  button: commonStyles.actionButton,
  giftExchangeButton: {
    ...commonStyles.actionButton,
    color: colors.success
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
  },
  startSurveyButton: {
    ...commonStyles.actionButton,
    color: colors.warning
  }
}

class HomePage extends React.Component {
  state = {
    doingTraitSurvey: false,
    completedTraitSurvey: false,
  }

  componentDidMount() {
    const hasCompletedTraitSurvey = userService.hasCompletedTraitSurvey() || false
    this.setState({
      completedTraitSurvey: hasCompletedTraitSurvey
    })
  }

  startSurvey = () => {
    this.setState({
      doingTraitSurvey: true
    })
  }

  completeSurvey = () => {
    this.setState({
      doingTraitSurvey: false,
      completedTraitSurvey: true
    })
  }

  introductionDom = () => (
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
  )

  traitsSurveyDom = () => (
      <Paper elevation={3} style={useStyles.surveyContent}>
        {
          this.state.doingTraitSurvey ?
              <TraitsSurvey completeSurvey={this.completeSurvey} retryOnErrorSurvey={this.startSurvey}/> :
              <Grid
                  container
                  direction="column"
                  justify="space-evenly"
                  alignItems="center"
                  style={useStyles.content}>
                <Grid item>
                  <AssignmentLateIcon fontSize="large"/>
                </Grid>
                <Grid item>
                  <p style={useStyles.text}>{text.incompleteSurvey}</p>
                </Grid>
                <Grid item>
                  <Button
                      variant="text"
                      style={useStyles.startSurveyButton}
                      type="button"
                      onClick={this.startSurvey}
                  >{buttonText.completeSurvey}</Button>
                </Grid>
              </Grid>
        }
      </Paper>
  )

  giftExchangeDom = () => (
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
              variant="text"
              style={useStyles.giftExchangeButton}
              type="button"
              size="large"
          >{buttonText.exchangeGifts}</Button>
        </Grid>
      </Grid>
  )

  hasNotCompletedTraitSurvey = () => !this.state.completedTraitSurvey

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
              {this.introductionDom()}
              {this.hasNotCompletedTraitSurvey() && this.traitsSurveyDom()}
              {this.giftExchangeDom()}
            </Grid>
          </div>
        </div>
    );
  }
}

export {HomePage}
