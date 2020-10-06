import useGlobalState from "../state";
import useLocalStorage from "react-use-localstorage";
import React, {useEffect} from "react";
import {Box} from "@material-ui/core";
import MyPaper from "./atoms/MyPaper";
import _ from 'lodash';
import Filter from "../model/Filter";
import View from "../model/View";

const SyncLocalStorage = () => {

  const [init, setInit] = useGlobalState("init");
  const [filter, setFilter] = useGlobalState('filter');
  const [view, setView] = useGlobalState('view');
  const [storedView, setStoredView] = useLocalStorage('view', JSON.stringify(view));
  const [storedFilter, setStoredFilter] = useLocalStorage('filter', JSON.stringify(filter));
  const filterInSync = _.isEqual(filter, Object.assign(new Filter(), JSON.parse(storedFilter)));
  const viewInSync = _.isEqual(view, Object.assign(new View(), JSON.parse(storedView)));

  useEffect(() => {
    // not initialized? try to get from local storage
    if (!init) {
      if (!filterInSync) {
        setFilter(Object.assign(new Filter(), JSON.parse(storedFilter)))
      }
      if (!viewInSync) {
        setView(Object.assign(new View(), JSON.parse(storedView)))
      }
      setInit(true)
    }
  }, [filterInSync, init, setFilter, setInit, setView, storedFilter, storedView, viewInSync]);

  useEffect(() => {
    // sync global and local storage details
    if (init) {
      if (!filterInSync) {
        setStoredFilter(JSON.stringify(filter));
      }
      if (!viewInSync) {
        setStoredView(JSON.stringify(view))
      }
    }
  }, [filter, filterInSync, init, setStoredFilter, setStoredView, storedView, view, viewInSync]);

  return <Box style={{maxWidth: "400px"}}>
    <MyPaper>
      <pre style={{overflow: "auto"}}>{[ { state: {filter, view, init}}].map(it => JSON.stringify(it, undefined, 2)).join("\n")}</pre>
    </MyPaper>

  </Box>

};

// noinspection JSUnusedGlobalSymbols
export default SyncLocalStorage