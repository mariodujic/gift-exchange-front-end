import React from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Trait from "./Trait";
import {traitService} from "./trait.service";

const useStyles = {
  content: {
    width: "100%",
    padding: "20px"
  },
  progress: {
    width: "100%"
  }
}

class TraitsSurvey extends React.Component {
  state = {
    questions: [],
    currentTrait: Object,
    currentProgress: 0,
    totalProgress: 0
  }

  componentDidMount() {
    this.getSurvey()
  }

  getSurvey = () => {
    traitService.getSurvey().then(
        response => this.onSuccess(response),
        error => {
          // TODO
          console.log(error);
        }
    )
  }

  onSuccess(traits) {
    this.setState({
      questions: traits,
      currentTrait: traits[0],
      totalProgress: traits.length
    })
  }

  onAnswer = () => {
    if(this.isLastTrait()) {
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

  getNextQuestion() {
    return this.state.currentProgress + 1
  }

  getNextTraitObject() {
    return this.state.questions[this.getNextQuestion()]
  }

  getProgress = () => {
    return this.getNextQuestion() / this.state.totalProgress * 100
  }

  render() {
    return (
        <div>
          <Grid
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
        </div>
    )
  }
}

export default TraitsSurvey;
