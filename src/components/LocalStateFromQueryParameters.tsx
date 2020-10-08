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
}

const paramConfigMap = {
  outcomeId: StringParam,
  depth: NumberParam
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

  const location = useLocation();
  const query = decodedQuery(qs.parse(location.search, {parseNumbers: true}));

  useEffect(() => {
    if (init) return;
    // query values override global state
    if (_.keys(query).length === 0) {
      setInit(true);
      return;
    }

    const {outcomeId, depth} = query;

    const filter = new Filter();
    filter.focusOutcome = outcomeId ? outcomeId : undefined;
    if (depth) {
      setDepth(depth)
    }

    setFilter(filter);
    setInit(true)


  }, [init, query, setDepth, setFilter, setInit]);

  return null;
};

export default LocalStateFromQueryParameters