import useGlobalState from "../../state";
import Filter from "../../model/Filter";
import _ from "lodash";
import React from "react";
import CheckboxButton from "../atoms/CheckboxButton";


const FilterResult = () => {
  const [filter, setFilter] = useGlobalState('filter');
  const outcomes = window.outcomes;

  function toggle(result: string) {
    const newFilter = Object.assign(new Filter(), filter);
    let index = newFilter.testResult.exclude.indexOf(result);
    if (index < 0) {
      newFilter.testResult.exclude.push(result)
    } else {
      newFilter.testResult.exclude.splice(index, 1)
    }
    setFilter(newFilter)
  }

  let results: Array<string> = _.uniq(outcomes.map((it) => it.result));
  return <>
    <strong>filter test result</strong><br/>
    {results.map(it => {
      return <CheckboxButton key={it} checked={!filter.testResult.exclude.includes(it)} onClick={() => toggle(it)}>
        {it}
      </CheckboxButton>

    })}
  </>
};

export default FilterResult