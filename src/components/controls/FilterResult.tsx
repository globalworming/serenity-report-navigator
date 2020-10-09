import useGlobalState from "../../state";
import Filter from "../../model/Filter";
import _ from "lodash";
import React from "react";
import CheckboxButton from "../atoms/CheckboxButton";
import {Button} from "@material-ui/core";


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

  const canBeCleared = filter.results.length > 0;

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
    <Button disabled={!canBeCleared} variant={"contained"} color={"secondary"} onClick={clear}>X</Button>
  </>
};

export default FilterResult