import {createMuiTheme} from "@material-ui/core";
import {colors} from "./colors";

export const baseTheme = createMuiTheme({
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

export const pretentiousTheme = createMuiTheme({
  palette: {
    primary: {
      main: colors.success,
    },
    secondary: {
      main: colors.whiteLight
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 48,
        borderWidth: "2px !important"
      },
    },
  },
});
