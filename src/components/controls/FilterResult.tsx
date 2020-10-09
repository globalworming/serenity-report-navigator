import useGlobalState from "../../state";
import Filter from "../../model/Filter";
import _ from "lodash";
import React from "react";
import CheckboxButton from "../atoms/CheckboxButton";
import ClearButton from "../molecules/ClearButton";


const FilterResult = () => {
  const [filter, setFilter] = useGlobalState('filter');
  const outcomes = window.outcomes;
  let results: Array<string> = _.uniq(outcomes.map((it) => it.result));

  function toggle(result: string) {
    const newFilter = Object.assign(new Filter(), filter);

    if (newFilter.results.length === 0) {
      newFilter.results = results
    }

    let index = newFilter.results.indexOf(result);
    if (index < 0) {
      newFilter.results.push(result)
    } else {
      newFilter.results.splice(index, 1)
    }
    setFilter(newFilter)
  }

  const canBeCleared = filter.results.length > 0 && filter.results.length !== results.length;

  const clear = () => {
    const newFilter = Object.assign(new Filter(), filter);
    newFilter.results = [];
    setFilter(newFilter)
  };

  return <>
    {results.map(it => {
      return <CheckboxButton key={it} checked={filter.results.length === 0 || filter.results.includes(it)} onClick={() => toggle(it)}>
        {it}
      </CheckboxButton>

    })}
    <ClearButton disabled={!canBeCleared} onClick={clear}/>
  </>
};

export default FilterResult