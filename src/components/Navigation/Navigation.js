import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "1rem",
  },
  title: {
    flexGrow: 1,
  },
}

class Navigation extends React.Component {
  render() {
    return <div style={useStyles.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" style={useStyles.menuButton} color="inherit" arsia-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h5" style={useStyles.title}>
            {this.props.title}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  }
}

export default Navigation;
