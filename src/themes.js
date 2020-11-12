import {createMuiTheme} from "@material-ui/core";

const Themes = {
  dark: createMuiTheme({
    palette: {
      primary: {
        main: "#00a34e",
      },
      secondary: {
        main: "#3f51c2",
      },
      text: {
        primary: "#DDD",
      },
      background: {
        default: "#000000",
        paper: "#222222"
      }
    },
  }),
  light: createMuiTheme({
    palette: {
      primary: {
        main: "#8ca500",
      },
      secondary: {
        main: "#465ccf",
      },
      text: {
        primary: "#303030"
      },
      background: {
        default: "#EEEEEE",
        paper: "#FFFFFF"
      }
    },
  }),
  custom: {}
};

export default Themes