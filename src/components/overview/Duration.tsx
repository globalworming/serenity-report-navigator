import React from "react";
import useGlobalState from "../../state";
import moment from "moment";
import prettyMilliseconds from "pretty-ms";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import Result, {colorOf} from "../../model/Result";
import {Box} from "@material-ui/core";

const Duration = () => {
  const [outcomes] = useGlobalState("filteredOutcomes");

  const earliestDate = outcomes.map(it => moment(it.startTime).unix()).sort()[0];
  const latestDate = outcomes.map(it => moment(it.startTime).add(it.duration, 'milliseconds').unix()).sort().reverse()[0]
  ;

  const durations = outcomes.map(it => it.duration).sort(function(a, b) {
    return a - b;
  });
  const maximumDuration = Math.max(...durations);

  // for max + 1 / 10 + i* max / 10
  // data[i].push(result where duration < i * max / 10)

  // row -> column vert wrap, -> results stacked

  const bars: Array<Array<Result>> = [];

  const numberOfBars = 30;

  for (let i = 0; i < numberOfBars; i++) {
    bars.push(
      outcomes
        .filter(it =>
          (it.duration <= (maximumDuration / numberOfBars * i) + ((maximumDuration + 1) / numberOfBars))
          && (it.duration > (maximumDuration / numberOfBars * (i - 1)) + ((maximumDuration + 1) / numberOfBars))
        )
        .map(it => it.result).sort().reverse()
    )
  }

  const maxBarItems = Math.max(...bars.map(it => it.length));
  const heightPixel = 300;

  return <>
    <strong>duration distribution</strong>
    <FullWidthWrappingFlexBox>
      <FullWidthWrappingFlexBox style={{minHeight: `${heightPixel}px`}}>
        {bars.map(
          bar => {
            return <Box display={"flex"} flexDirection={"column"} flex={`0 0 ${(100 / numberOfBars)}%`} justifyContent="flex-end">
              {bar.map(result =>
                <Box  style={{background: colorOf(result), borderBottom: "1px solid black", borderRight: "1px solid black", borderTop: "1px solid #DDD", borderLeft: "1px solid #888", height: `${heightPixel / maxBarItems}px`}}/>
              )}
            </Box>;
          }
        )}
      </FullWidthWrappingFlexBox>
      <FullWidthWrappingFlexBox style={{justifyContent: "space-between"}}>
        <span>0</span><span>{prettyMilliseconds(maximumDuration * 0.25)}</span><span>{prettyMilliseconds(maximumDuration * 0.5)}</span><span>{prettyMilliseconds(maximumDuration *0.75)}</span><span>{prettyMilliseconds(maximumDuration)}</span>
      </FullWidthWrappingFlexBox>
      <span>took {prettyMilliseconds(latestDate - earliestDate)}</span>
    </FullWidthWrappingFlexBox>

  </>


};

export default Duration