import React, {FunctionComponent} from "react";
import {Box} from "@material-ui/core";

const StoryName: FunctionComponent = ({children}) => {
  return <Box flex={`1 0 70%`}>
    {children}
  </Box>
};

export default StoryName