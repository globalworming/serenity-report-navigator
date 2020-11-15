import * as React from "react";
import {FunctionComponent} from "react";
import {Button} from "@material-ui/core";

interface MyProps {
  disabled: boolean,
  onClick: Function
}

const ClearButton: FunctionComponent<MyProps> = ({disabled, onClick}) => {
  const style = {
    marginLeft: "auto",
    minWidth: "0",
  };
    return <Button disabled={disabled} variant={"outlined"} color={"secondary"} style={style} onClick={() => onClick()}>X</Button>
};

export default ClearButton