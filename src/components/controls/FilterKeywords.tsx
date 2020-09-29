import useGlobalState from "../../state";
import React, {useEffect, useRef, useState} from "react";
import Filter, {includeAllText} from "../../model/Filter";
import _ from "lodash";

const FilterKeywords = () => {
  const [filter, setFilter] = useGlobalState('filter');
  const [localValue, setLocalValue] = useState(filter.keyword.include)

  const syncFilter = (newValue: string) => {
    const newFilter = Object.assign(new Filter(), filter);
    if (newValue.length === 0) {
      newFilter.keyword.include = includeAllText;
      setFilter(newFilter)
      return
    }

    newFilter.keyword.include = newValue;
    setFilter(newFilter)
  }

  const debouncedSync = useRef(_.debounce(syncFilter, 300)).current;

  useEffect(() => {
    if (filter.keyword.include !== localValue) {
      debouncedSync(localValue)
    }
    return () => debouncedSync.cancel()
  }, [debouncedSync, filter.keyword.include, localValue]);

  return <>
    <input type={"text"} placeholder={"search in story, name, ..."} value={localValue === includeAllText ? "" : localValue} onChange={(e) => setLocalValue(e.target.value)}/>

  </>
};

export default FilterKeywords