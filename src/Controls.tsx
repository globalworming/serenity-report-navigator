import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Button, Paper} from "@material-ui/core";
import {Link} from "react-router-dom";
import useGlobalState from "./state";
import _ from 'lodash';
import Filter, {includeAll} from "./model/Filter";


const Controls = () => {
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
      <p>
        <Search/>
      </p>
    </Paper></>
  }
;

const TestLinksAndRoutes = () => {
  return <>
    <strong>test direkt links and routing</strong><br/>
    <Button variant="contained" color="primary" disableElevation href="?id=4&id=5&detail=2">test param
      link</Button><br/>
    <Link to="?id=4&id=5&detail=3">router query test</Link><br/>(does update location and causes rerender 👍)<br/>
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

const Search = () => {
  const [filter, setFilter] = useGlobalState('filter');
  const [localValue, setLocalValue] = useState(filter.keyword.include)

  const syncFilter = (newValue: string) => {
    const newFilter = Object.assign(new Filter(), filter);
    if (newValue.length === 0) {
      newFilter.keyword.include = includeAll;
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
    <strong>search</strong><br/>
    <input type={"text"} placeholder={"search in story, name, ..."} value={localValue === includeAll ? "" : localValue} onChange={(e) => setLocalValue(e.target.value)}/>

  </>
};

export default Controls;
