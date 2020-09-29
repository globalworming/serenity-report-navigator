import useGlobalState from "../state";
import {useLocation} from "react-router";
import qs from "query-string";
import React, {useEffect} from "react";
import * as _ from "lodash";


const InitLocalStateFromQueryParameters = () => {

  const [init, setInit] = useGlobalState("init");
  const [detail, setDetail] = useGlobalState('detail');
  const [filter, setFilter] = useGlobalState('filter');
  const [view, setView] = useGlobalState('view');

  const location = useLocation();
  const query = qs.parse(location.search);

  useEffect(() => {
    if (init) return;
    // query values override global state
    if (_.keys(query).length === 0) {
      setInit(true)
      return;
    }

    let result = {detail, view, filter};

    ["detail", "filter_testResult_exclude", "filter_keyword_include", "view_showScreenshots"].forEach(it => {
      if (!query[it]) return;
      const path = it.replace(/_/g, ".");
      _.set(result, path, query[it])
    });


    // TODO single query parameter will set unused parameters to default
    setDetail(result.detail);
    setView(result.view);
    setFilter(result.filter);
    setInit(true)
  }, [detail, filter, init, query, setDetail, setFilter, setInit, setView, view]);

  return <pre style={{overflow: "auto"}}>{[{
    state: {
      detail,
      filter,
      view,
      init
    }
  }].map(it => JSON.stringify(it, undefined, 2)).join("\n")}</pre>
};

export default InitLocalStateFromQueryParameters