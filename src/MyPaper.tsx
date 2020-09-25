import {Paper} from "@material-ui/core";
import * as React from "react";

type Props = { children: any}

const MyPaper = ({children}: Props) => {
  return <Paper style={{padding: "1rem", margin: "1rem"}}>
    {children}
  </Paper>
}

export default MyPaper