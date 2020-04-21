import React from 'react';
import './App.css';
import {RegisterPage} from "./Register";
import {HomePage} from "./Home";
import {userService} from "./_services";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LoginPage} from "./Login";
import {ErrorPage} from "./Error";
import {colors} from "./_utils";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif'
  }
});

class App extends React.Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.loadInitialUser()
    // authenticationService.currentUser.subscribe(value => this.setState({currentUser: value}))
  }

  loadInitialUser() {
    const user = userService.getUser()
    this.setState({
      currentUser: user ? user : null
    })
  }

  setNewUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  render() {
    const currentUser = this.state.currentUser;
    return (
        <ThemeProvider theme={theme}>
          <div>
            <Router>
              {currentUser ? <HomePage/> : this.authenticationDom()}
            </Router>
          </div>
        </ThemeProvider>
    )
  }

  authenticationDom() {
    return (
        <div className="authorization">
          <Switch>
            <Route path="/" exact render={(props) => <LoginPage onLogin={this.setNewUser}/>}/>
            <Route path="/login" render={(props) => <LoginPage onLogin={this.setNewUser}/>}/>
            <Route path="/register" render={(props) => <RegisterPage onRegister={this.setNewUser}/>}/>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
    )
  }
}

export default App;
