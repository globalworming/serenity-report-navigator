import useLocalStorage from "react-use-localstorage";
import {Box} from "@material-ui/core";
import CheckboxButton from "./atoms/CheckboxButton";
import React from "react";
import moment from "moment"

const EnableTracking = () => {
  const [track, setTrack] = useLocalStorage("track", "f");
  const isTracking = track === "t";

  function toggle() {
    isTracking ? setTrack("f") : setTrack("t")
  }

  return <>
    <Box style={{marginLeft: "auto"}}>
      <CheckboxButton checked={track === "t"} onClick={toggle}>allow anonymous usage tracking</CheckboxButton>
    </Box>
    {track === "t" && <img style={{width: 0, height: 0}}
                           src={`https://9j6d0cvfq0.execute-api.eu-west-1.amazonaws.com/trackUsage?event=enableTracking&env=${process.env.NODE_ENV}&t=${moment().valueOf()}`}/>}
  </>
};
export default EnableTracking