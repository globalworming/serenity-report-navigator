import React from 'react';
import './App.css';
import MyPaper from "./MyPaper";

const Overview = () => {

  const outcomes = window.outcomes;

  const groupBy = function (xs: Array<any>, key: string) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  let dates = outcomes.map(it => new Date(it.timestamp).getTime());


  const {PENDING, SUCCESS, ERROR} = groupBy(outcomes, "result");

  return <><MyPaper>
    <strong>overview</strong>
    <dl>
      <dt>pending</dt><dd>{PENDING.length}</dd>
      <dt>passing</dt><dd>{SUCCESS.length}</dd>
      <dt>failing</dt><dd>{ERROR.length}</dd>
      <dt>most recent test</dt><dd>{new Date(Math.max(...dates)).toISOString()}</dd>
    </dl>
  </MyPaper></>
  }
;

export default Overview;
