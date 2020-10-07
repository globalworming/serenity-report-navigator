import useGlobalState from "../state";
import {useLocation} from "react-router";
import qs, {ParsedQuery, stringify} from "query-string";
import React, {useEffect} from "react";
import * as _ from "lodash";
import {decodeQueryParams, encodeQueryParams, StringParam} from 'serialize-query-params';
import TestOutcome from "../model/TestOutcome";
import Filter from "../model/Filter";

export const paramConfigMap = { outcome: StringParam };
// encode each parameter according to the configuration
const decodedQuery = (query: ParsedQuery<string | number>) => decodeQueryParams(
  paramConfigMap, query
);

// encode each parameter according to the configuration
export const encodedQuery = (outcome: TestOutcome) => stringify(encodeQueryParams(
  paramConfigMap,
  { outcome: outcome.id}
));

const LocalStateFromQueryParameters = () => {
  const [init, setInit] = useGlobalState("init");
  const [, setFilter] = useGlobalState('filter');

  const location = useLocation();
  const query = decodedQuery(qs.parse(location.search, {parseNumbers: true}));

  useEffect(() => {
    if (init) return;
    // query values override global state
    if (_.keys(query).length === 0) {
      setInit(true);
      return;
    }

    const {outcome} = query;

    const filter = new Filter();
    filter.focusOutcome = outcome ? outcome : undefined;
    setFilter(filter);
    setInit(true)


  }, [init, query, setFilter, setInit]);

  return <pre style={{overflow: "auto"}}>{[{
    state: {
      init
    }
  }].map(it => JSON.stringify(it, undefined, 2)).join("\n")}</pre>
};

export default LocalStateFromQueryParameters