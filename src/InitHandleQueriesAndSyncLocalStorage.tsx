import useGlobalState from "./state";
import useLocalStorage from "react-use-localstorage";
import {useLocation} from "react-router";
import qs from "query-string";
import React, {useEffect, useState} from "react";
import {Box, CircularProgress} from "@material-ui/core";
import MyPaper from "./MyPaper";

const InitHandleQueriesAndSyncLocalStorage = () => {

  const [detail, setDetail] = useGlobalState('detail');
  const [storedDetail, setStoredDetail] = useLocalStorage('detail', detail.toString());
  const location = useLocation();
  const query = qs.parse(location.search);
  const [init, setInit] = useState(false);

  useEffect(() => {
    // query overrides everything
    if (!init && query.detail && query.detail[0]) {
      setDetail(parseInt(query.detail[0]));
      setStoredDetail(query.detail[0])
    }
  }, [init, query.detail, setDetail, setStoredDetail]);

  useEffect(() => {
    // not initialized? try to get from local storage
    if (detail < 0) {
      if (parseInt(storedDetail) >= 0) {
        setDetail(parseInt(storedDetail))
      } else {
        setDetail(0);
        setStoredDetail("0");
      }
    }

  }, [detail, setDetail, setStoredDetail, storedDetail]);

  useEffect(() => {
    // set init when done
    if (!init && detail >= 0 && detail === parseInt(storedDetail)) {
      setInit(true)
    }
  }, [detail, init, storedDetail]);


  useEffect(() => {
    if (init && detail !== parseInt(storedDetail)) {
      setStoredDetail(detail.toString())
    }
  }, [init, detail, storedDetail, setStoredDetail]);

  return <Box style={{maxWidth: "401px"}}>
    <MyPaper>
      <p><strong>Init, handle queries and sync local storage</strong> FIXME: that's a lot for a single component to be responsible for, split?</p>
      {detail < 0 && <div><strong>loading...</strong> <CircularProgress/></div>}
      <pre style={{overflow: "auto"}}>{[{window: {location}}, {query}, { state: {detail, location}}].map(it => JSON.stringify(it, undefined, 2)).join("\n")}</pre>
    </MyPaper>

  </Box>

};

export default InitHandleQueriesAndSyncLocalStorage