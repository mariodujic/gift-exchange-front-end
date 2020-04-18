import React from "react";
import {authenticationService, validity} from "../_services";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {commonStyles} from "../_utils/styles";
import Button from "@material-ui/core/Button";
import {colors} from "../_utils/colors";

const useStyles = {
  root: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center"
  },
  title: commonStyles.title,
  image: commonStyles.mediumLogoImage,
  button: {
    backgroundColor: colors.success,
    color: colors.light,
    minWidth: "330px",
    height: "50px"
  },
  input: {
    minWidth: "330px"
  },
  warning: {
    color: colors.warning,
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
      this.invalidInputHandler("Email length should be more then 1")
      return;
    }
    if (!validity.passwordForm(this.state.password)) {
      this.invalidInputHandler("Password length should be more then 1")
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
        <div style={useStyles.root}>
          <Grid
              container
              direction="column"
              justify="center"
              alignItems="center">
            <Grid item>
              <img
                  style={useStyles.image}
                  src="/images/gift.svg" alt=""/>
            </Grid>
            <Grid item>
              <h2 style={useStyles.title}>Login</h2>
            </Grid>
            <Grid item>
              <div>
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
                          variant="contained"
                          style={useStyles.button}
                          type="submit"
                      >Login</Button>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}>
              <Grid item><p>Don't have an account? </p></Grid>
              <Grid item><Link to="/register">Create an account!</Link></Grid>
            </Grid>
          </Grid>
        </div>
    );
  }
}

export {LoginPage}
