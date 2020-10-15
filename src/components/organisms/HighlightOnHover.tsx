import React, {FunctionComponent, useState} from "react";
import {Box} from "@material-ui/core";

const HighlightOnHover: FunctionComponent = ({children}) => {

  const [hover, setHover] = useState(false);

  return <Box display={"flex"} flex={1} style={{backgroundColor: `${hover ? "#3f51b560" : "#3f51b500"}`, transition: "background-color 300ms cubic-bezier(0, 1, 0, 1)"}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onMouseDown={() => setHover(false)}>
    {children}
  </Box>
};

export default HighlightOnHover