import React from "react";
import {authenticationService, validity} from "../_services";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {commonStyles} from "../_utils/styles";
import Button from "@material-ui/core/Button";
import {buttonText, colors, text, warningText} from "../_utils";
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

class LoginPage extends React.Component {
  state = {
    username: '',
    password: '',
    invalidInput: false,
    invalidInputMessage: ''
  }

  loginUser = (event) => {
    event.preventDefault();
    if (!validity.emailForm(this.state.username)) {
      this.invalidInputHandler(warningText.emailSize)
      return;
    }
    if (!validity.passwordForm(this.state.password)) {
      this.invalidInputHandler(warningText.passwordSize)
      return;
    }
    authenticationService.login(
        this.state.username,
        this.state.password
    ).then(
        response => this.props.onLogin(response),
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
                <form onSubmit={this.loginUser}>
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
                      {this.state.invalidInput &&
                      <p style={useStyles.warning}>{this.state.invalidInputMessage}</p>}
                    </Grid>
                    <Grid item>
                      <Button
                          variant="text"
                          style={useStyles.button}
                          type="submit"
                      >{buttonText.login}</Button>
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
              <Grid item style={useStyles.link}><p>{text.noAccount}</p></Grid>
              <Grid item style={useStyles.link}><Link to="/register">{buttonText.createAccount}</Link></Grid>
            </Grid>
          </Grid>
        </div>
    );
  }
}

export {LoginPage}
