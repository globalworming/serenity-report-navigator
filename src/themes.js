import {createMuiTheme} from "@material-ui/core";

const Themes = {
  dark: createMuiTheme({
   palette: {
      primary: {
        main: "#8d86a3",
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
        main: "#a5819e",
      },
      secondary: {
        main: "#4d65e5",
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

export const BreakPoints = {
  breakVievMode: 750
}

export default Themes