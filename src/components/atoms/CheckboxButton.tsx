import * as React from "react";
import {Button} from "@material-ui/core";
import {FunctionComponent} from "react";

interface MyProps {
  checked: boolean,
  onClick: Function
  fullWidth?: boolean
}

const CheckboxButton: FunctionComponent<MyProps> = ({checked, onClick, children, fullWidth}) => {
  return <Button fullWidth={fullWidth} style={{margin: "0.2rem", background: "none", color: "#FFF"}} variant="outlined" color={"primary"} onClick={() => onClick()}>
    {
      checked ?
        <span role="img" aria-label="checked">☑️</span>
        : <span role="img" aria-label="unchecked">🚫</span>
    }&nbsp;{
    children
  }
  </Button>
};

export default CheckboxButton