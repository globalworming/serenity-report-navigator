import {Paper} from "@material-ui/core";
import * as React from "react";

type Props = { children: any}

const MyPaper = ({children}: Props) => {
  return <Paper style={{padding: "0.25rem", margin: "0.1rem", maxWidth: "100%", overflow: "hidden", minHeight: "2.5rem",
    lineHeight: 2}}>
    {children}
  </Paper>
};

export default MyPaper