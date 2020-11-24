import React from "react";
import {Button} from "@material-ui/core";
import FilterListIcon from '@material-ui/icons/FilterList';
import useGlobalState from "../../state";
import ClearButton from "../molecules/ClearButton";
import Filter from "../../model/Filter";
import * as _ from "lodash";

export const ToggleSideMenu = () => {

  const [showSideMenu, setShowSideMenu] = useGlobalState("showSideMenu");
  const [filter, setFilter] = useGlobalState("filter");
  const activeFilters = _.keys(filter).filter(it => {
    return !_.isEqual(_.get(new Filter(), it), _.get(filter, it));
  });
  const [, setDepths] = useGlobalState("expansionDepth");


  const buttonStyle = {
    minWidth: 0,
  };


  return <>
    <Button className={"ToggleSideMenu"}
      style={buttonStyle}
      onClick={() => setShowSideMenu(!showSideMenu)}
      variant={!showSideMenu ? "contained" : "outlined"}
      color="secondary"
      startIcon={<FilterListIcon />}>{activeFilters.length >= 1 && activeFilters.length }</Button>
    <ClearButton disabled={activeFilters.length === 0} onClick={() => {
      setDepths(0);
    return setFilter(new Filter());
  }}/>
  </>
};