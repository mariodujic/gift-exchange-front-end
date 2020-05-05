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
import {ProfilePage} from "./Profile";
import Navigation from "./components/Navigation/Navigation";

class App extends React.Component {
  state = {
    currentUser: null,
    navigationTitle: ''
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

  setTitle = (title) => {
    this.setState({
      navigationTitle: title
    })
  }

  render() {
    const currentUser = this.state.currentUser;
    return (
        <ThemeProvider theme={baseTheme}>
          <Router>
            {currentUser ? this.contentDom() : this.authenticationDom()}
          </Router>
        </ThemeProvider>
    )
  }

  contentDom() {
    return (
        <div>
          <Navigation title={this.state.navigationTitle}/>
          <Switch>
            <Route path="/" exact render={(props) => <HomePage setTitle={this.setTitle}/>}/>
            <Route path="/profile" render={(props) => <ProfilePage setTitle={this.setTitle}/>}/>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
    )
  }

  authenticationDom() {
    return (
        <div className="authorization">
          <Switch>
            <Route path="/" exact render={(props) => <LoginPage onLogin={this.setNewUser}/>}/>
            <Route path="/login" render={(props) => <LoginPage onLogin={this.setNewUser}/>}/>
            <Route path="/register" render={(props) => <RegisterPage onRegister={this.setNewUser}/>}/>
            <Route path="/profile" render={(props) => <ProfilePage/>}/>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
    )
  }
}

export default App;
