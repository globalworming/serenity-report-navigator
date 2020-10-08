import useGlobalState from "../state";
import {useLocation} from "react-router";
import qs, {ParsedQuery, stringify} from "query-string";
import {useEffect} from "react";
import * as _ from "lodash";
import {decodeQueryParams, encodeQueryParams, NumberParam, StringParam} from 'serialize-query-params';
import Filter from "../model/Filter";


interface MyQuery {
  outcomeId?: string
  depth?: number
  view?: string
}

const paramConfigMap = {
  outcomeId: StringParam,
  depth: NumberParam,
  view: StringParam
};

// encode each parameter according to the configuration
const decodedQuery = (query: ParsedQuery<string | number>) => decodeQueryParams(
  paramConfigMap, query
);

export const encodedQuery = (query: MyQuery) => {
  return stringify(encodeQueryParams(paramConfigMap, query));
};

const LocalStateFromQueryParameters = () => {
  const [init, setInit] = useGlobalState("hasParsedQuery");
  const [, setFilter] = useGlobalState('filter');
  const [, setDepth] = useGlobalState('expansionDepth');
  const [, setView] = useGlobalState('view');

  const location = useLocation();
  const query = decodedQuery(qs.parse(location.search, {parseNumbers: true}));

  useEffect(() => {
    if (init) return;
    // query values override global state
    if (_.keys(query).length === 0) {
      setInit(true);
      return;
    }

    const {outcomeId, depth, view} = query;

    const filter = new Filter();
    filter.focusOutcome = outcomeId ? outcomeId : undefined;
    setFilter(filter);

    if (depth) setDepth(depth);
    if (view) setView(view);


    setInit(true)


  }, [init, query, setDepth, setFilter, setInit, setView]);

  return null;
};

export default LocalStateFromQueryParameters