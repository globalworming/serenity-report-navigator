import * as React from "react";
import {Button} from "@material-ui/core";
import {FunctionComponent} from "react";

interface MyProps {
  disabled: boolean,
  onClick: Function
}

const ClearButton: FunctionComponent<MyProps> = ({disabled, onClick}) => {

  const style = Object.assign({
    margin: "0.2rem",
    marginLeft: "auto",
    padding: "0",
    minWidth: "1rem"
  }, disabled ? {
    background: "#53767f",
    color: "black"
  } : {
    background: "#ff3647",
    color: "white"
  });
  if (disabled) {
    return <Button disabled style={style} onClick={() => onClick()}>X</Button>
  }
  return <Button color={"secondary"} style={style} onClick={() => onClick()}>X</Button>
};

export default ClearButton