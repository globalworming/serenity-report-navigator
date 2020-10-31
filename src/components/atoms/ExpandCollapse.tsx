/* eslint-disable jsx-a11y/accessible-emoji */
import {Button, useTheme} from "@material-ui/core"
import React from "react";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";


interface MyProps {
  isExpanded: boolean
  onClick?: Function
}

const ExpandCollapse = ({isExpanded, onClick}: MyProps) => {
  const theme = useTheme();
  const buttonStyle = {
    margin: "0.25em",
    minWidth: 0,
    padding: 0, height: "1.5rem", lineHeight: 1, paddingLeft: "0.7rem"
  };


  return <>
    {!isExpanded &&
    <Button
        style={buttonStyle}
        onClick={(() => onClick !== undefined && onClick())}
        variant="contained"
        color="secondary"
        startIcon={<ExpandMore style={{color: theme.palette.background.paper}}/>}
    />
    }
    {isExpanded &&
    <Button
        style={buttonStyle}
        onClick={(() => onClick !== undefined && onClick())}
        variant="contained"
        color="secondary"
        startIcon={<ExpandLess style={{color: theme.palette.background.paper}}/>}
    />
    }
  </>
};

export default ExpandCollapse