import * as React from "react";
import {Button} from "@material-ui/core";
import {FunctionComponent} from "react";

interface MyProps {
  checked: boolean,
  onClick: Function
}

const CheckboxButton: FunctionComponent<MyProps> = ({checked, onClick, children}) => {
  return <Button variant="contained" onClick={() => onClick()}>
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