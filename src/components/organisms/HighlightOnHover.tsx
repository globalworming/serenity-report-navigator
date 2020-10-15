import React, {FunctionComponent, useState} from "react";
import {Box} from "@material-ui/core";

const HighlightOnHover: FunctionComponent = ({children}) => {

  const [hover, setHover] = useState(false);

  return <Box display={"flex"} flex={1} style={{backgroundColor: `${hover ? "#00000022" : "#00000000"}`, transition: "background-color 200ms ease-out"}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onMouseDown={() => setHover(false)}>
    {children}
  </Box>
}

export default HighlightOnHover