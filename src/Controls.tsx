import React, {useEffect} from 'react';
import './App.css';
import {Button, Paper} from "@material-ui/core";
import {Link} from "react-router-dom";
import useGlobalState from "./state";
import _ from 'lodash';
import Filter from "./model/Filter";


const Controls = () => {

    const [filter] = useGlobalState('filter');
    const [, setFilteredOutcomes] = useGlobalState("filteredOutcomes");
  const outcomes = window.outcomes;

    useEffect(() => {
      setFilteredOutcomes(outcomes.filter(it => !filter.exclude.includes(it.result)));
    }, [filter, outcomes, setFilteredOutcomes]);


  return <><Paper style={{padding: "1rem", margin: "1rem"}}>
      <p><strong>controls</strong></p>
      <p>
        <TestLinksAndRoutes/>
      </p>
      <p>
        <DetailLevel/>
      </p>
      <p>
        <FilterResult/>
      </p>
    </Paper></>
  }
;

const TestLinksAndRoutes = () => {
  return <>
    <strong>test direkt links and routing</strong><br/>
    <Button variant="contained" color="primary" disableElevation href="?id=4&id=5&detail=2">test param
      link</Button><br/>
    <Link to="?id=4&id=5&detail=3">router query test</Link><br/>(does update location and causes rerender 👍)
    <Button variant="contained" disableElevation
            onClick={() => localStorage.clear()}>clear local storage</Button><br/>

  </>
};

const DetailLevel = () => {
  const [detail, setDetail] = useGlobalState('detail');

  return <>
    <strong>amount of info</strong> (0-4 does stuff)<br/>
    <Button variant="contained" color="secondary" disableElevation
            onClick={() => setDetail((detail - 1))}>-detail</Button>
    <Button variant="contained" disableElevation
            onClick={() => setDetail(1)}>reset</Button>
    <Button
      variant="contained" color="primary" disableElevation
      onClick={() => setDetail((detail + 1))}>+detail</Button>
  </>
};

const FilterResult = () => {
  const [filter, setFilter] = useGlobalState('filter');
  const outcomes = window.outcomes;

  function toggle(result: string) {
    const newFilter = Object.assign(new Filter(), filter);
    let index = newFilter.exclude.indexOf(result);
    if (index < 0) {
      newFilter.exclude.push(result)
    } else {
      newFilter.exclude.splice(index, 1)
    }
    setFilter(newFilter)
  }

  let results: Array<string> = _.uniq(outcomes.map((it) => it.result));
  return <>
    <strong>filter test result</strong><br/>
    {results.map(it => {
      return <Button key={it} variant="contained"
                     onClick={() => toggle(it)}>{filter.exclude.includes(it) ? "" : "-->"} {it}</Button>

    })}
  </>
};

export default Controls;
