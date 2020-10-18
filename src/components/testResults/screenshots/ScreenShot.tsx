import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import React from "react";

interface MyProps1 {
  fileName: string
  width: number
}

const stage = process.env.REACT_APP_STAGE;
const screenshotDir = stage === "template" ? "../" : "./screenshots/";
const ScreenShot = ({fileName, width}: MyProps1) => <FullWidthWrappingFlexBox
  style={{
    backgroundImage: "url('"+ screenshotDir + fileName + "')",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    //boxShadow: `${colorOf(tell.result)} -1px -1px 10px 2px`,
    width: "100%",
    display: "block",
    height: 0.8 * width + "rem"
  }}
/>;

export default ScreenShot