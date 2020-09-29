import useGlobalState from "../state";
import {useLocation} from "react-router";
import qs from "query-string";
import React, {useEffect} from "react";
import * as _ from "lodash";


const LocalStateFromQueryParameters = () => {

  const [init, setInit] = useGlobalState("init");
  const [filter, setFilter] = useGlobalState('filter');
  const [view, setView] = useGlobalState('view');

  const location = useLocation();
  const query = qs.parse(location.search);

  useEffect(() => {
    if (init) return;
    // query values override global state
    if (_.keys(query).length === 0) {
      return;
    }

    let result = {view, filter};

    ["detail", "filter_testResult_exclude", "filter_keyword_include", "view_showScreenshots"].forEach(it => {
      if (!query[it]) return;
      const path = it.replace(/_/g, ".");
      _.set(result, path, query[it])
    });


    // TODO single query parameter will set unused parameters to default
    setView(result.view);
    setFilter(result.filter);
  }, [filter, init, query, setFilter, setInit, setView, view]);

  return <pre style={{overflow: "auto"}}>{[{
    state: {
      filter,
      view,
      init
    }
  }].map(it => JSON.stringify(it, undefined, 2)).join("\n")}</pre>
};

export default LocalStateFromQueryParameters