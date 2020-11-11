import React from "react";
import {Button} from "@material-ui/core";
import FilterListIcon from '@material-ui/icons/FilterList';
import useGlobalState from "../../state";

export const ToggleSideMenu = () => {

  const [showSideMenu, setShowSideMenu] = useGlobalState("showSideMenu");

  const buttonStyle = {
    margin: "0.25em",
    minWidth: 0,
    padding: 0, height: "1.5rem", lineHeight: 1, paddingLeft: "0.7rem"
  };


  return <>
    <Button
      style={buttonStyle}
      onClick={() => setShowSideMenu(!showSideMenu)}
      variant={!showSideMenu ? "contained" : "outlined"}
      color="secondary"
      startIcon={<FilterListIcon />}
    />
  </>
};