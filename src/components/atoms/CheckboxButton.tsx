import * as React from "react";
import {Button, useTheme} from "@material-ui/core";
import {FunctionComponent} from "react";

interface MyProps {
  checked: boolean,
  onClick: Function
  fullWidth?: boolean
}

const CheckboxButton: FunctionComponent<MyProps> = ({checked, onClick, children, fullWidth}) => {
  const theme = useTheme();
  return <Button fullWidth={fullWidth} style={{wordBreak: "break-word", margin: "0.2rem", color: theme.palette.text.primary, background: checked ? theme.palette.background.paper : theme.palette.background.default}} variant="outlined"
                 color={"primary"} onClick={() => onClick()}>
    {
      children
    }
  </Button>
};

export default CheckboxButton