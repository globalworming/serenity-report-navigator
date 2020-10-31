import React, {useState} from "react";
import useGlobalState from "../../../state";
import prettyMilliseconds from "pretty-ms";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {Box, Slider} from "@material-ui/core";
import _ from "lodash";

const DurationStatistics = () => {
  const [outcomes] = useGlobalState("filteredOutcomes");

  const sortedDurations = outcomes.map(it => it.duration).sort((a, b) => a - b);
  const [percentiles, setPercentiles] = useState([20, 80, 95]);

  function percentile(percent: number) {
    const index = Math.floor((sortedDurations.length - 1) * 0.01 * percent);


    return sortedDurations[index]
  }

  return <>
    <FullWidthWrappingFlexBox style={{flex: "0 0 450px", lineHeight: 2, padding: "0.5rem", justifyContent: "space-around"}}>
      <FullWidthWrappingFlexBox>
        <strong>duration per test outcome</strong>
      </FullWidthWrappingFlexBox>

      <Box>
        <ul>
          <li>min {prettyMilliseconds(sortedDurations[0])}</li>
          <li>
            avg {prettyMilliseconds(_.mean(sortedDurations))}
          </li>
          <li>
            max {prettyMilliseconds(sortedDurations[sortedDurations.length - 1])}
          </li>
        </ul>
      </Box>
      <Box>
      <ul>
          {
            percentiles.map((it, i) => <li key={i}>{it}th percentile: {"<="}{prettyMilliseconds(percentile(it))}</li>)
          }
        </ul>
      </Box>
      <Box>
        <Slider
          style={{width: "100%"}}
          defaultValue={[20, 80, 95]}
          aria-labelledby="discrete-slider-small-steps"
          step={1}
          marks
          min={0}
          max={100}
          valueLabelDisplay="auto"
          onChange={(e, v) => (v instanceof Array) ? setPercentiles(v) : setPercentiles([v])}
          orientation={"vertical"}
        />
      </Box>

    </FullWidthWrappingFlexBox>
  </>


};

export default DurationStatistics