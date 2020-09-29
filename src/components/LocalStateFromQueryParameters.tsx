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
  const query = qs.parse(location.search, {parseNumbers: true});

  useEffect(() => {
    if (init) return;
    // query values override global state
    if (_.keys(query).length === 0) {
      setInit(true);
      return;
    }

    let result = {view, filter};


    const allowedParameters = ["view_detail", "filter_testResult_exclude", "filter_testResult_include", "filter_keyword_include", "view_showScreenshots"];
    const unrecognized = _.keys(query).filter(it => !allowedParameters.includes(it));
    if (unrecognized.length > 0) {
      console.warn("unrecognized parameters: " + unrecognized.join(", "))
    }

    allowedParameters.forEach(it => {
      if (!query[it]) return;
      const path = it.replace(/_/g, ".");
      _.set(result, path, query[it])
    });


    // TODO single query parameter will set unused parameters to default
    setView(result.view);
    setFilter(result.filter);
    setInit(true)

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