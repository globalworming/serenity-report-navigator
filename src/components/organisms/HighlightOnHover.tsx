import React, {FunctionComponent, useState} from "react";
import {Box, useTheme} from "@material-ui/core";

const HighlightOnHover: FunctionComponent = ({children}) => {
  const theme = useTheme();

  const [hover, setHover] = useState(false);

  return <Box display={"flex"} flex={1} style={{backgroundColor: `${hover ? theme.palette.secondary.main + "2A" : theme.palette.background.default +"00"}`, transition: "background-color 300ms cubic-bezier(0, 1, 0, 1)"}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onMouseDown={() => setHover(false)}>
    {children}
  </Box>
};

export default HighlightOnHover