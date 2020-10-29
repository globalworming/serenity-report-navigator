import {createMuiTheme} from "@material-ui/core";

const Themes = {
  dark: createMuiTheme({
    palette: {
      primary: {
        main: "#00a34e",
      },
      secondary: {
        main: "#4b5de5",
      },
      text: {
        primary: "#DDD",
      },
      background: {
        default: "#000",
        paper: "#222"
      }
    },
  }),
  light: createMuiTheme({
    palette: {
      primary: {
        main: "#8ca500",
      },
      secondary: {
        main: "#3f51b5",
      },
      text: {
        primary: "#303030"
      },
      background: {
        default: "#EEE",
        paper: "#FFF"
      }
    },
  })
};

export default Themes