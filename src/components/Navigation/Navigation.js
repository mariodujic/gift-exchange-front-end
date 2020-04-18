import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import {AccountCircle} from "@material-ui/icons";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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

  state = {
    anchorEl: null
  }

  handleMenu = (event) => {
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  };

  render() {
    const open = Boolean(this.state.anchorEl)

    return <div style={useStyles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" style={useStyles.menuButton} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h5" style={useStyles.title}>
            {this.props.title}
          </Typography>
          <div>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit">
              <AccountCircle/>
            </IconButton>
            <Menu
                id="menu-appbar"
                ref={this.wrapper}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}>
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  }
}

export default Navigation;
