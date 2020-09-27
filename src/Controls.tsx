import React, {useEffect} from 'react';
import './App.css';
import {Button, Paper} from "@material-ui/core";
import {Link} from "react-router-dom";
import useGlobalState from "./state";
import _ from 'lodash';
import Filter from "./model/Filter";


const Controls = () => {

    const [detail, setDetail] = useGlobalState('detail');
    const [filter, setFilter] = useGlobalState('filter');
    const [, setFilteredOutcomes] = useGlobalState("filteredOutcomes")

    useEffect(() => {
      setFilteredOutcomes(outcomes.filter(it => !filter.exclude.includes(it.result)));
    }, [filter]);

  const outcomes = window.outcomes;
    let results: Array<string> = _.uniq(outcomes.map((it) => it.result));

  function toggle(it: string) {
    const newFilter = Object.assign(new Filter(), filter)
    let index = newFilter.exclude.indexOf(it);
    if (index < 0) {
      newFilter.exclude.push(it)
    } else {
      newFilter.exclude.splice(index, 1)
    }
    setFilter(newFilter)
  }

  return <><Paper style={{padding: "1rem", margin: "1rem"}}>
      <p><strong>controls</strong></p>
      <p>
        <Button variant="contained" color="primary" disableElevation href="?id=4&id=5&detail=0">test param
          link</Button><br/>
        <Link to="?id=4&id=5&detail=0">router query test</Link><br/>(does update location and causes rerender 👍)
      </p>
      <p>
        <strong>amount of info</strong> (0-4 does stuff)<br/>
        <Button variant="contained" color="secondary" disableElevation
                onClick={() => setDetail((detail - 1))}>-detail</Button>
        <Button variant="contained" disableElevation
                onClick={() => setDetail(1)}>reset</Button>
        <Button
          variant="contained" color="primary" disableElevation
          onClick={() => setDetail((detail + 1))}>+detail</Button>
      </p>
      <p>
        <strong>filter</strong><br/>
        {results.map(it => {
          return <Button key={it} variant="contained"
                         onClick={() => toggle(it)}>{filter.exclude.includes(it) ? "" : "-->"} {it}</Button>

        })}
      </p>
    </Paper></>
  }
;

export default Controls;
