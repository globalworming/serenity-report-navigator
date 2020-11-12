import React, {FunctionComponent, useState} from "react";
import {Box, useTheme} from "@material-ui/core";

interface MyProps {
  border?: boolean
}

const HighlightOnHover: FunctionComponent<MyProps> = ({border, children}) => {
  const theme = useTheme();

  const [hover, setHover] = useState(false);

  if (border) {
    return <Box display={"flex"} flex={1} style={{
      border: `0.2rem solid ${hover ? theme.palette.secondary.main + "2A" : theme.palette.background.default + "60"}`,
      transition: "border 300ms cubic-bezier(0, 1, 0, 1)",
    }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onMouseDown={() => setHover(false)}>
      {children}
    </Box>
  }

  return <Box display={"flex"} flex={1} style={{
    backgroundColor: `${hover ? theme.palette.secondary.main + "2A" : theme.palette.background.default + "00"}`,
    transition: "background-color 300ms cubic-bezier(0, 1, 0, 1)"
  }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onMouseDown={() => setHover(false)}>
    {children}
  </Box>
};

export default HighlightOnHover