import React from 'react';
import './App.css';
import {RegisterPage} from "./Register";
import {HomePage} from "./Home";
import {userService} from "./_services";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LoginPage} from "./Login";
import {ErrorPage} from "./Error";
import {ThemeProvider} from "@material-ui/styles";
import {baseTheme} from "./_utils";

class App extends React.Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.loadInitialUser()
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
        <ThemeProvider theme={baseTheme}>
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
