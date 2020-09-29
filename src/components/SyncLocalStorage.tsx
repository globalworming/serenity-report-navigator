import useGlobalState from "../state";
import useLocalStorage from "react-use-localstorage";
import React, {useEffect} from "react";
import {Box} from "@material-ui/core";
import MyPaper from "./atoms/MyPaper";
import _ from 'lodash';
import Filter from "../model/Filter";

const SyncLocalStorage = () => {

  const [init, setInit] = useGlobalState("init");
  const [detail, setDetail] = useGlobalState('detail');
  const [filter, setFilter] = useGlobalState('filter');
  const [view, setView] = useGlobalState('view');
  const [storedDetail, setStoredDetail] = useLocalStorage('detail', detail.toString());
  const [storedFilter, setStoredFilter] = useLocalStorage('filter', JSON.stringify(filter));

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
      setInit(true)
    }
  }, [detail, filterInSync, init, setDetail, setFilter, setStoredDetail, storedDetail, storedFilter]);

  useEffect(() => {
    // sync global and local storage details
    if (init) {
      if (detail !== parseInt(storedDetail)) {
        setStoredDetail(detail.toString());
      }

      if (!filterInSync) {
        setStoredFilter(JSON.stringify(filter));
      }
    }
  }, [detail, filter, filterInSync, init, setStoredDetail, setStoredFilter, storedDetail]);

  return <Box style={{maxWidth: "400px"}}>
    <MyPaper>
      <pre style={{overflow: "auto"}}>{[ { state: {detail, filter, view, init}}].map(it => JSON.stringify(it, undefined, 2)).join("\n")}</pre>
    </MyPaper>

  </Box>

};

export default SyncLocalStorage