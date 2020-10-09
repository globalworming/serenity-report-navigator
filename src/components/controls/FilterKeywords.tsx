import useGlobalState from "../../state";
import React, {useEffect, useRef, useState} from "react";
import Filter from "../../model/Filter";
import _ from "lodash";

const FilterKeywords = () => {
  const [filter, setFilter] = useGlobalState('filter');
  const [localValue, setLocalValue] = useState(filter.keyword ? filter.keyword : "");

  const syncFilter = (newValue: string) => {
    const newFilter = Object.assign(new Filter(), filter);
    newFilter.keyword = newValue;
    setFilter(newFilter)
  };

  const debouncedSync = useRef(_.debounce(syncFilter, 300)).current;

  useEffect(() => {
    if (filter.keyword !== localValue) {
      debouncedSync(localValue)
    }
    return () => debouncedSync.cancel()
  }, [debouncedSync, filter.keyword, localValue]);

  return <> <strong>search keyword</strong>
    <input type={"text"} placeholder={"search in story, name, ..."} value={localValue} onChange={(e) => setLocalValue(e.target.value)}/>

  </>
};

export default FilterKeywords