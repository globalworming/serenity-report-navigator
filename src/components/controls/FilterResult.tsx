import useGlobalState from "../../state";
import Filter from "../../model/Filter";
import _ from "lodash";
import {Button} from "@material-ui/core";
import React from "react";

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
      return <Button key={it} variant="contained"
                     onClick={() => toggle(it)}>{filter.testResult.exclude.includes(it) ? "" : "-->"} {it}</Button>

    })}
  </>
};

export default FilterResult