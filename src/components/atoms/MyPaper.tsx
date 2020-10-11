import * as React from "react";
import Box from "@material-ui/core/Box";

type Props = { children: any}

const MyPaper = ({children}: Props) => {
  return <Box style={{color: "white", padding: "0.1rem", width: "100%", maxWidth: "100%", overflow: "hidden",
    lineHeight: 2}}>
    {children}
  </Box>
};

export default MyPaper