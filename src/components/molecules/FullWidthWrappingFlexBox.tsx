import {CSSProperties, FunctionComponent} from "react";
import {Box} from "@material-ui/core";
import React from "react";

interface MyProps {
  style?: CSSProperties,
  className?: string
}

const FullWidthWrappingFlexBox: FunctionComponent<MyProps> = ({children, style, className}) => {
  return <Box className={className} display={"flex"} flex={"0 0 100%"} flexWrap={"wrap"} maxWidth={"100%"} style={style}>{children}</Box>
};


export default FullWidthWrappingFlexBox