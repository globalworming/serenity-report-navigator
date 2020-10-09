import useGlobalState from "../../state";
import React from "react";
import Filter from "../../model/Filter";
import {Button} from "@material-ui/core";
import ClearButton from "../molecules/ClearButton";

const FilterTestOutcome = () => {
  const [filter, setFilter] = useGlobalState('filter');
  if (filter.focusOutcome.length <= 0) {
    return null
  }

  const clear = () => {
    const newFilter = Object.assign(new Filter(), filter);
    newFilter.focusOutcome = "";
    setFilter(newFilter)
  };

  return <>
    <Button variant={"contained"} color={"primary"}>Outcome: {filter.focusOutcome}</Button>
    <ClearButton disabled={false} onClick={clear}/>
  </>
};

export default FilterTestOutcome