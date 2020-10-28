import useGlobalState from "../../state";
import React, {useEffect, useRef, useState} from "react";
import Filter from "../../model/Filter";
import _ from "lodash";
import ClearButton from "../molecules/ClearButton";
import {Box} from "@material-ui/core";

const FilterKeywords = () => {
  const [filter, setFilter] = useGlobalState('filter');
  const [, setDepths] = useGlobalState('expansionDepth');
  const [localValue, setLocalValue] = useState(filter.keyword);

  const sync = (filter: Filter, newValue: string) => {
    const newFilter = Object.assign(new Filter(), filter);
    newFilter.keyword = newValue;
    setFilter(newFilter);
    setDepths(0)
  };

  const debouncedSync = useRef(_.debounce(sync, 300)).current;

  useEffect(() => {
    setLocalValue(filter.keyword)
  }, [filter.keyword]);

  useEffect(() => {
    if (filter.keyword === localValue) return;
    debouncedSync(filter, localValue);
    return () => debouncedSync.cancel()
  }, [debouncedSync, filter, localValue]);

  return <>
    <Box margin={"0 0.2rem"} flex={"1 1 150px"}>
    <input style={{height: "2rem", width: "100%", padding: "0.5rem", color: "white", background: "black", borderColor: "white"}}
           type={"text"} placeholder={"search in story, name, ..."} value={localValue}
           onChange={(e) => setLocalValue(e.target.value)}/>
  </Box>
    <Box>
      <ClearButton disabled={localValue === ""} onClick={() => setLocalValue("")}/>
    </Box>
    </>
};

export default FilterKeywords