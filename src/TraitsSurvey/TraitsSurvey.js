import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";

const useStyles = {
  formControl: {
    margin: "1rem",
  },
  button: {
    margin: "0 1rem 1rem 0",
  }
}

class TraitsSurvey extends React.Component {

  state = {
    value: '',
    helperText: '',
    error: ''
  }

  handleRadioChange = (event) => {
    this.setState({
      value: event.target.value,
      helperText: '',
      error: false
    })
  };

  handleSubmit = () => {
    this.setState({
      helperText: "Submitted value"
    })
  }

  render() {
    return (
        <div>
          <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start">
            <h3>Title</h3>
            <p>Questions Questions Questions Questions </p>
            <Grid
                item
                container
                direction="row"
                justify="flex-start"
                alignItems="center">
              <Grid item>
                <form onSubmit={this.handleSubmit}>
                  <FormControl component="fieldset" error={this.state.error} style={useStyles.formControl}>
                    <FormLabel component="legend">Pop quiz: Material-UI is...</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={this.state.value}
                                onChange={this.handleRadioChange}>
                      <FormControlLabel value="best" control={<Radio/>} label="The best!"/>
                      <FormControlLabel value="worst" control={<Radio/>} label="The worst."/>
                    </RadioGroup>
                    <FormHelperText>{this.state.helperText}</FormHelperText>
                    <Button type="submit" variant="outlined" color="primary" style={useStyles.button}>
                      Check Answer
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
