import * as React from "react";
import {Button, useTheme} from "@material-ui/core";
import {FunctionComponent} from "react";

interface MyProps {
  disabled: boolean,
  onClick: Function
}

const ClearButton: FunctionComponent<MyProps> = ({disabled, onClick}) => {
  const theme = useTheme();
  const style = {
    margin: "0.2rem",
    marginLeft: "auto",
    padding: "0",
    minWidth: "1rem",
    color: disabled ? theme.palette.text.primary : theme.palette.background.default,
    border: "2px solid #A0A0A060"
  };
    return <Button disabled={disabled} variant={"contained"} color={"secondary"} style={style} onClick={() => onClick()}>X</Button>
};

export default ClearButton