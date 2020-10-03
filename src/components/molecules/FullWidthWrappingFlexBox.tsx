import {CSSProperties, FunctionComponent} from "react";
import {Box} from "@material-ui/core";
import React from "react";

interface MyProps {
  style?: CSSProperties
}

const FullWidthWrappingFlexBox: FunctionComponent<MyProps> = ({children, style}) => {
  return <Box display={"flex"} flex={"0 0 100%"} flexWrap={"wrap"} maxWidth={"100%"} style={style}>{children}</Box>
};


export default FullWidthWrappingFlexBox