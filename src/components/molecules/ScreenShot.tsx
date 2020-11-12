import FullWidthWrappingFlexBox from "./FullWidthWrappingFlexBox";
import React from "react";
import {useTheme} from "@material-ui/core";

interface MyProps1 {
  fileName: string
  width: number
}

const stage = process.env.REACT_APP_STAGE;
const screenshotDir = stage === "template" ? "../" : "./screenshots/";
const ScreenShot = ({fileName, width}: MyProps1) => {
  const theme = useTheme();
  return <a style={{width: "100%"}} href={screenshotDir + fileName} rel={"noopener noreferrer"} target={"_blank"}><FullWidthWrappingFlexBox
    style={{
      backgroundColor: theme.palette.background.paper,
      backgroundImage: "url('" + screenshotDir + fileName + "')",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      //boxShadow: `${colorOf(tell.result)} -1px -1px 10px 2px`,
      width: "100%",
      display: "block",
      height: 0.8 * width + "rem"
    }}
  /></a>;
};

export default ScreenShot