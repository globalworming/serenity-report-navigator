import useGlobalState from "../state";
import {useLocation} from "react-router";
import qs, {ParsedQuery, stringify} from "query-string";
import {useEffect} from "react";
import * as _ from "lodash";
import {ArrayParam, decodeQueryParams, encodeQueryParams, NumberParam, StringParam} from 'serialize-query-params';
import Filter from "../model/Filter";
import Themes from "../themes";
import {createMuiTheme} from "@material-ui/core";


export interface MyQuery {
  outcomeId?: string
  depth?: number
  view?: string
  results?: Array<string>
  text?: string
  type?: string
  tag?: string
  theme?: string
}

const paramConfigMap = {
  outcomeId: StringParam,
  depth: NumberParam,
  view: StringParam,
  results: ArrayParam,
  text: StringParam,
  type: StringParam,
  tag: StringParam,
  theme: StringParam
};

// encode each parameter according to the configuration
const decodedQuery = (query: ParsedQuery<string | number>) => decodeQueryParams(
  paramConfigMap, query
);

export const queryString = (props: MyQuery) => `?${encodedQuery(props)}`;

const encodedQuery = (query: MyQuery) => {
  return stringify(encodeQueryParams(paramConfigMap, query));
};

const LocalStateFromQueryParameters = () => {
  const [init, setInit] = useGlobalState("hasParsedQuery");
  const [, setFilter] = useGlobalState('filter');
  const [, setDepth] = useGlobalState('expansionDepth');
  const [, setView] = useGlobalState('view');
  const [, setTheme] = useGlobalState('theme');

  const location = useLocation();
  const query = decodedQuery(qs.parse(location.search, {parseNumbers: true}));

  useEffect(() => {
    if (init) return;
    // query values override global state
    if (_.keys(query).length === 0) {
      setInit(true);
      return;
    }

    const {outcomeId, depth, view, results, text, tag, type, theme} = query;

    function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
      return value !== null && value !== undefined;
    }

    const filter = new Filter();
    filter.focusOutcome = outcomeId ? outcomeId : "";
    filter.results = results && results.length > 0 ? results.filter(notEmpty) : [];
    filter.keyword = text ? text : "";
    filter.focusType = type ? type: "";
    filter.focusTag = tag ? tag: "";
    setFilter(filter);

    if (depth) setDepth(depth);

    if (view) setView(view);

    if (theme) {
      if (_.keys(Themes).includes(theme)) {
        setTheme(theme)
      } else if (theme.includes("_")) {
        const split = theme.split("_");
        Themes.custom = createMuiTheme({
          palette: {
            primary: {
              main: split[0],
            },
            secondary: {
              main: split[1],
            },
            text: {
              primary: split[2],
            },
            background: {
              default: split[3],
              paper: split[4]
            }
          },
        });
        setTheme("custom")
      }

    }

    setInit(true)


  }, [init, query, setDepth, setFilter, setInit, setTheme, setView]);

  return null;
};

export default LocalStateFromQueryParameters