import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import {userService} from "../../_services";
import {Link} from "react-router-dom";

const useStyles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "1rem",
  },
  title: {
    flexGrow: 1
  },
  button: {
    fontSize: "110%",
    marginLeft: "1.5rem",
    textTransform: "none"
  }
}

class Navigation extends React.Component {

  logout = () => {
    userService.removeUserDataLocally()
    window.location.reload(false)
  }

  render() {
    return (
        <div style={useStyles.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" style={useStyles.menuButton} color="inherit" aria-label="menu">
                <MenuIcon/>
              </IconButton>
              <Typography variant="h6" style={useStyles.title}>
                {this.props.title}
              </Typography>
              <Button
                  style={useStyles.button}
                  color="inherit"
                  onClick={this.logout}
                  component={Link}
                  to="/">
                Logout
              </Button>
              <Button style={useStyles.button} color="inherit" variant="outlined"><Link to={`/profile`}>Rendering with React</Link></Button>
            </Toolbar>
          </AppBar>
        </div>
    )
  }
}

export default Navigation;
