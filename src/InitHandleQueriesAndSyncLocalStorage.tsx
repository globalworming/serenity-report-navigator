import useGlobalState from "./state";
import useLocalStorage from "react-use-localstorage";
import {Redirect, useLocation} from "react-router";
import qs from "query-string";
import React, {useEffect} from "react";
import {Box, CircularProgress} from "@material-ui/core";
import MyPaper from "./MyPaper";
import _ from 'lodash';
import Filter from "./model/Filter";

const InitHandleQueriesAndSyncLocalStorage = () => {

  const [init, setInit] = useGlobalState("init");
  const [detail, setDetail] = useGlobalState('detail');
  const [filter, setFilter] = useGlobalState('filter');
  const [storedDetail, setStoredDetail] = useLocalStorage('detail', detail.toString());
  const [storedFilter, setStoredFilter] = useLocalStorage('filter', JSON.stringify(filter));
  const location = useLocation();
  const query = qs.parse(location.search);

  useEffect(() => {
    // query overrides everything
    if (!query.detail) return;

    let queriedDetail;
    if(typeof query.detail === "string") {
      queriedDetail = parseInt(query.detail)
    } else {
      queriedDetail = parseInt(query.detail[0])
    }
    setDetail(queriedDetail);
    // FIXME set filter from query
    setTimeout(() => setInit(true), 1000)

  }, [init, query.detail, setDetail, setInit]);


  const filterInSync = _.isEqual(filter, Object.assign(new Filter(), JSON.parse(storedFilter)));

  useEffect(() => {
    // not initialized? try to get from local storage
    if (!init) {
      if (parseInt(storedDetail) >= 0 && parseInt(storedDetail) !== detail) {
        setDetail(parseInt(storedDetail))
      }
      if (!filterInSync) {
        setFilter(Object.assign(new Filter(), JSON.parse(storedFilter)))
      }
    }
  }, [detail, filterInSync, init, setDetail, setFilter, setStoredDetail, storedDetail, storedFilter]);

  useEffect(() => {

    // sync global and local storage detlails
    if (init) {
      if (detail !== parseInt(storedDetail)) {
        setStoredDetail(detail.toString());
      }

      if (!filterInSync) {
        setStoredFilter(JSON.stringify(filter));
      }

    }
  }, [detail, filter, filterInSync, init, setStoredDetail, setStoredFilter, storedDetail]);

  useEffect(() => {
    // set init when done
    if (!init && parseInt(storedDetail) >= 0 && storedFilter) {
      setTimeout(() => setInit(true), 1000)
    }
  }, [init, setInit, storedDetail, storedFilter]);


  // not sure if i should update location or provide share link... damn, syncing url would be best -.- maybe later, for now just remove the query to avoid confusion
  if (init && location.search) {
    return <Redirect to={"./"}/>
  }

  return <Box style={{maxWidth: "401px"}}>
    <MyPaper>
      <p><strong>Init, handle queries and sync local storage</strong> FIXME: that's a lot for a single component to be responsible for, split?</p>
      {detail < 0 && <div><strong>loading...</strong> <CircularProgress/></div>}
      <pre style={{overflow: "auto"}}>{[ { state: {detail, filter}}].map(it => JSON.stringify(it, undefined, 2)).join("\n")}</pre>
    </MyPaper>

  </Box>

};

export default InitHandleQueriesAndSyncLocalStorage