import {FunctionComponent} from "react";
import {Box} from "@material-ui/core";
import React from "react";

const FullWidthWrappingFlexBox: FunctionComponent = ({children}) => {
  return <Box display={"flex"} flex={"0 0 100%"} flexWrap={"wrap"} maxWidth={"100%"}>{children}</Box>
};


export default FullWidthWrappingFlexBox