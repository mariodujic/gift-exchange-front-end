import React from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Trait from "./Trait";
import {traitService} from "./trait.service";
import CircularProgress from "@material-ui/core/CircularProgress";
import {buttonText, commonStyles, text, titleText} from "../_utils";
import Icon from "@material-ui/core/Icon";
import {colors} from "../_utils/colors";
import Button from "@material-ui/core/Button";

const useStyles = {
  content: {
    width: "100%",
    padding: "20px"
  },
  circularProgressContent: {
    width: "80px",
    padding: "80px",
    height: "80px",
  },
  progress: {
    width: "100%"
  },
  fixedImage: {
    height: "300px",
    width: "300px",
  },
  icon: {
    color: colors.warning,
    marginTop: "2rem"
  },
  subtitle: {
    color: colors.lightGrey,
    marginTop: 0,
  },
  closeFinishedSurveyButton: {
    ...commonStyles.actionButton,
    color: colors.lightGrey,
    marginBottom: "2rem"
  }
}

class TraitsSurvey extends React.Component {
  state = {
    questions: [],
    currentTrait: Object,
    currentProgress: 0,
    totalProgress: 0,
    error: false,
    errorMessage: '',
    surveyFinished: false
  }

  componentDidMount() {
    this.getSurvey()
  }

  getSurvey = () => {
    traitService.getSurvey().then(
        response => this.onGetSurveySuccess(response),
        error => this.onGetSurveyError(error)
    )
  }

  onGetSurveySuccess(traits) {
    this.setState({
      questions: traits,
      currentTrait: traits[0],
      totalProgress: traits.length
    })
  }

  onGetSurveyError(message) {
    this.setState({
      error: true,
      errorMessage: message
    })
  }

  onAnswer = () => {
    if (this.isLastTrait()) {
      this.postCompletedSurveyToServer()
      return
    }

    this.setState({
      currentProgress: this.getNextQuestion(),
      currentTrait: this.getNextTraitObject()
    })
  }

  isLastTrait() {
    return this.state.currentProgress + 1 === this.state.totalProgress
  }

  postCompletedSurveyToServer() {
    traitService.postSurvey(this.getCompletedSurveyData()).then(
        result => this.onCompletedSurveySuccess(),
        error => this.onCompletedSurveyError())
  }

  onCompletedSurveySuccess() {
    this.setState({
      surveyFinished: true
    })
  }

  onCompletedSurveyError(error) {
    this.setState({
      error: true,
      errorMessage: error
    })
  }

  getCompletedSurveyData = () => ({
    description: "Random description"
  })

  hideCompletedSurvey = () => this.props.completeSurvey()

  getNextQuestion() {
    return this.state.currentProgress + 1
  }

  getNextTraitObject() {
    return this.state.questions[this.getNextQuestion()]
  }

  getProgress = () => {
    return this.getNextQuestion() / this.state.totalProgress * 100
  }

  traitsLoaded = () => {
    return this.state.questions.length > 0
  }

  onLoadingDom() {
    return <Grid container
                 direction="column"
                 justify="center"
                 alignItems="center">
      <CircularProgress
          style={useStyles.circularProgressContent}/>
    </Grid>
  }

  onSuccessDom() {
    return <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        style={useStyles.content}>
      <Trait onAnswer={this.onAnswer} trait={this.state.currentTrait}/>
      <Grid item style={useStyles.progress}>
        <LinearProgress
            color="primary" variant="determinate"
            value={this.getProgress()}/>
      </Grid>
    </Grid>
  }

  onFinishedSurveyDom() {
    return <Grid container
                 direction="column"
                 justify="center"
                 alignItems="center">
      <Grid item className="topMargin">
        <img
            style={useStyles.fixedImage}
            src="/images/hat.svg" alt=""/>
      </Grid>
      <Grid item>
        <h1 className="noMargin">{titleText.congrats}</h1>
      </Grid>
      <Grid item>
        <h2 style={useStyles.subtitle}>{text.eligibleForGiftExchangeShort}</h2>
      </Grid>
      <Grid item>
        <Button
            variant="text"
            style={useStyles.closeFinishedSurveyButton}
            type="button"
            onClick={this.hideCompletedSurvey}
        >{buttonText.hide}</Button>
      </Grid>
    </Grid>
  }

  onErrorDom() {
    return <Grid container
                 direction="column"
                 justify="center"
                 alignItems="center">
      <Grid item>
        <Icon style={useStyles.icon} fontSize="large">warning</Icon>
      </Grid>
      <Grid item>
        <h1 className="noMargin">{titleText.traitsSurveyError}</h1>
      </Grid>
      <Grid item>
        <h2>{this.state.errorMessage}</h2>
      </Grid>
    </Grid>
  }

  render() {
    return (
        <div>
          {
            this.state.error ?
                this.onErrorDom() :
                <div>
                  {
                    this.state.surveyFinished ?
                        this.onFinishedSurveyDom() :
                        <div>
                          {this.traitsLoaded() ? this.onSuccessDom() : this.onLoadingDom()}
                        </div>
                  }
                </div>
          }
        </div>
    )
  }
}

export default TraitsSurvey;
