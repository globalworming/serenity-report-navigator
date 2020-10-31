import useGlobalState from "../../state";
import Filter from "../../model/Filter";
import _ from "lodash";
import React from "react";
import CheckboxButton from "../atoms/CheckboxButton";
import ClearButton from "../molecules/ClearButton";
import ResultImage from "../atoms/ResultImage";


const FilterResult = () => {
  const [filter, setFilter] = useGlobalState('filter');
  const [, setDepths] = useGlobalState('expansionDepth');

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
    setDepths(0);
    setFilter(newFilter)
  }

  const canBeCleared = filter.results.length > 0 && filter.results.length !== results.length;

  const clear = () => {
    setDepths(0);
    const newFilter = Object.assign(new Filter(), filter);
    newFilter.results = [];
    setFilter(newFilter)
  };

  return <>
    <span style={{textTransform: "capitalize"}}>filter</span>
    <ClearButton disabled={!canBeCleared} onClick={clear}/>
    {results.map(it => {
      return <React.Fragment key={it}>
        <CheckboxButton fullWidth={true} checked={filter.results.length === 0 || filter.results.includes(it)} onClick={() => toggle(it)}>
        {it}&nbsp;<ResultImage result={it}/>
      </CheckboxButton></React.Fragment>

    })}
  </>
};

export default FilterResult