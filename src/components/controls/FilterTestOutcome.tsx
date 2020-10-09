import useGlobalState from "../../state";
import React from "react";
import Filter from "../../model/Filter";
import {Button} from "@material-ui/core";

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
    <Button variant={"contained"}>Outcome: {filter.focusOutcome}</Button>
    <Button variant={"contained"} color={"secondary"} onClick={clear}>X</Button>
  </>
};

export default FilterTestOutcome