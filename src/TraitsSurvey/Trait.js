import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import {colors, commonStyles} from "../_utils";
import {buttonText} from "../_utils/strings";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

const useStyles = {
  title: {
    color: colors.strongPink,
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: 0,
  },
  formControl: {
    margin: "1rem",
  },
  surveyButton: {
    ...commonStyles.surveyButton,
    background: colors.success,
    margin: "1rem 0 1rem 0",
  },
}


class Trait extends React.Component {
  state = {
    value: '',
    helperText: '',
    error: false
  }

  handleRadioChange = (event) => {
    this.setState({
      value: event.target.value,
      helperText: '',
      error: false
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()

    if (!this.hasAnswerSelected()) {
      this.changeHelperText("Select answer")
      return
    }

    this.changeHelperText('')
    this.props.onAnswer()
    this.resetValue()
  }

  hasAnswerSelected() {
    return this.state.value !== ''
  }

  changeHelperText = (message) => {
    this.setState({
      helperText: message
    })
  }

  resetValue() {
    this.setState({
      value: ''
    })
  }

  render() {
    const trait = this.props.trait
    const answers = trait.answers
    return (
        <div>
          <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center">
            <Grid item>
              <h1 style={useStyles.title}>{trait.title}</h1>
            </Grid>
            <Grid
                item
                container
                direction="row"
                justify="flex-start"
                alignItems="center">
              <Grid item>
                <form onSubmit={this.handleSubmit}>
                  <FormControl component="fieldset" error={this.state.error} style={useStyles.formControl}>
                    <FormLabel component="legend">{trait.question}</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={this.state.value}
                                onChange={this.handleRadioChange}>
                      {answers &&
                      answers.map((answer, index) => (
                          <FormControlLabel key={index} value={answer} control={<Radio/>} label={answer}/>))
                      }
                    </RadioGroup>
                    <FormHelperText>{this.state.helperText}</FormHelperText>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={useStyles.surveyButton}>
                      {buttonText.submit}
                    </Button>
                  </FormControl>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </div>
    )
  }
}

export default Trait
