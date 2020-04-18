import React from "react";
import {authenticationService, validity} from "../_services";
import {Link} from "react-router-dom";
import {colors, commonStyles} from "../_utils";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Tutorial from "../components/Tutorial/Tutorial";

const useStyles = {
  title: commonStyles.title,
  image: commonStyles.mediumLogoImage,
  form: {
    marginTop: "3rem"
  },
  button: commonStyles.formButton,
  input: {
    minWidth: "330px"
  },
  warning: {
    color: colors.warning,
  },
  link: {
    padding: "10px"
  }
}

class RegisterPage extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    passwordConfirmation: '',
    invalidInput: false,
    invalidInputMessage: ''
  }

  registerUser = (event) => {
    event.preventDefault();

    if (!validity.emailForm(this.state.username)) {
      this.invalidInputHandler("Email length should be more then 1")
      return;
    }
    if (!validity.passwordForm(this.state.password)) {
      this.invalidInputHandler("Password length should be more then 1")
      return;
    }
    if (!validity.passwordConfirmation(this.state.password, this.state.passwordConfirmation)) {
      this.invalidInputHandler("Passwords do not match")
      return;
    }
    authenticationService.register(
        this.state.firstName,
        this.state.lastName,
        this.state.username,
        this.state.password
    ).then(
        response => this.props.onRegister(response),
        error => this.invalidInputHandler(error)
    )
  }

  invalidInputHandler = (message) => {
    this.setState({invalidInput: true})
    this.setState({invalidInputMessage: message})
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
        <div>
          <Grid
              container
              direction="column"
              justify="center"
              alignItems="center">
            <Tutorial/>
            <Grid item>
              <div style={useStyles.form}>
                <form onSubmit={this.registerUser}>
                  <Grid
                      spacing={1}
                      container
                      direction="column"
                      justify="center"
                      alignItems="center">
                    <Grid item>
                      <TextField
                          style={useStyles.input}
                          id="outlined-basic"
                          label="First name"
                          variant="outlined"
                          name="firstName"
                          value={this.state.firstName}
                          onChange={this.handleOnChange}/>
                    </Grid>
                    <Grid item>
                      <TextField
                          style={useStyles.input}
                          id="outlined-basic"
                          label="Last name"
                          variant="outlined"
                          name="lastName"
                          value={this.state.lastName}
                          onChange={this.handleOnChange}/>
                    </Grid>
                    <Grid item>
                      <TextField
                          style={useStyles.input}
                          id="outlined-basic"
                          label="Username"
                          variant="outlined"
                          name="username"
                          value={this.state.username}
                          onChange={this.handleOnChange}/>
                    </Grid>
                    <Grid item>
                      <TextField
                          style={useStyles.input}
                          id="outlined-basic"
                          label="Password"
                          variant="outlined"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleOnChange}/>
                    </Grid>
                    <Grid item>
                      <TextField
                          style={useStyles.input}
                          id="outlined-basic"
                          label="Confirm password"
                          variant="outlined"
                          name="passwordConfirmation"
                          value={this.state.passwordConfirmation}
                          onChange={this.handleOnChange}/>
                      <Grid item>
                        {this.state.invalidInput &&
                        <p style={useStyles.warning}>{this.state.invalidInputMessage}</p>}
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Button
                          variant="text"
                          style={useStyles.button}
                          type="submit"
                      >Register</Button>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
              <Grid item style={useStyles.link}><p>Already have an account? </p></Grid>
              <Grid item style={useStyles.link}><Link to="/login">Sign in</Link></Grid>
            </Grid>
          </Grid>
        </div>
    );
  }
}

export {RegisterPage}
