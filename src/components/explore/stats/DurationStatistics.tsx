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
        <strong>duration per test outcome</strong>
    <FullWidthWrappingFlexBox style={{justifyContent: "space-between", lineHeight: 3}}>
      <Box>
        <FullWidthWrappingFlexBox>
          <Box>
              {
                percentiles.sort().reverse().map((it, i) => <Box key={i + "_" + it}>{it}th percentile: {"<="}{prettyMilliseconds(percentile(it))}</Box>)
              }
          </Box>
          <Box>
            <Slider
              defaultValue={[20, 80, 95]}
              aria-labelledby="discrete-slider-small-steps"
              step={1}
              marks
              min={0}
              max={99.9}
              valueLabelDisplay="auto"
              onChange={(e, v) => (v instanceof Array) ? setPercentiles(v) : setPercentiles([v])}
              orientation={"vertical"}
            />
          </Box>
        </FullWidthWrappingFlexBox>
      </Box>
      <Box>
          <Box>
            max {prettyMilliseconds(sortedDurations[sortedDurations.length - 1])}
          </Box>
          <Box>
            avg {prettyMilliseconds(_.mean(sortedDurations))}
          </Box>
          <Box>min {prettyMilliseconds(sortedDurations[0])}</Box>
      </Box>
    </FullWidthWrappingFlexBox>

  </>


};

export default DurationStatistics