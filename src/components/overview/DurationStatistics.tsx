import React, {useState} from "react";
import useGlobalState from "../../state";
import prettyMilliseconds from "pretty-ms";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import Result, {colorOf} from "../../model/Result";
import {Box, Slider, TextField} from "@material-ui/core";
import _ from "lodash";

const DurationStatistics = () => {
  const [outcomes] = useGlobalState("filteredOutcomes");

  const sortedDurations = outcomes.map(it => it.duration).sort((a, b) => a - b);
  const [percentiles, setPercentiles] = useState([95])

  function percentile(percent: number) {
    const index = Math.floor((sortedDurations.length - 1) * 0.01 * percent);


    return sortedDurations[index]
  }
  return <>
    <strong>duration per testoutcome</strong>
    <FullWidthWrappingFlexBox>
      <ul>
        <li>min {prettyMilliseconds(sortedDurations[0])}</li>
        <li>
          max {prettyMilliseconds(sortedDurations[sortedDurations.length - 1])}
        </li>
        <li>
          avg {prettyMilliseconds(_.mean(sortedDurations))}
        </li>
      </ul>
    </FullWidthWrappingFlexBox>
    <FullWidthWrappingFlexBox>
      <Slider
        style={{width: "100%"}}
        defaultValue={95}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
        onChange={(e, v) => (v instanceof Array)? setPercentiles(v) : setPercentiles([v])}
      />
    </FullWidthWrappingFlexBox>
    <FullWidthWrappingFlexBox>
      {percentiles[0]}th percentile: {"<="}{prettyMilliseconds(percentile(percentiles[0]))}
    </FullWidthWrappingFlexBox>

  </>


};

export default DurationStatistics