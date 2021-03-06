import useGlobalState from "../../state";
import React from "react";
import Filter from "../../model/Filter";
import {Button} from "@material-ui/core";
import ClearButton from "../molecules/ClearButton";

const FilterTestOutcome = () => {
  const [filter, setFilter] = useGlobalState('filter');
  const [, setDepths] = useGlobalState('expansionDepth');
  if (filter.focusOutcome.length <= 0) {
    return null
  }

  const clear = () => {
    setDepths(0);
    const newFilter = Object.assign(new Filter(), filter);
    newFilter.focusOutcome = "";
    setFilter(newFilter)
  };

  return <>
    <ClearButton disabled={false} onClick={clear}/>
    <Button variant={"contained"} color={"primary"}>Outcome: {filter.focusOutcome.split(".").join(" ")}</Button>
  </>
};

export default FilterTestOutcome