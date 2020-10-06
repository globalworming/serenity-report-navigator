import React, {useState} from "react";
import useGlobalState from "../../state";
import prettyMilliseconds from "pretty-ms";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import Result, {colorOf} from "../../model/Result";
import {Box, TextField} from "@material-ui/core";

const DurationsDistribution = () => {
  const [outcomes] = useGlobalState("filteredOutcomes");
  const [divisions, setDivisions] = useState(30);

  const maximumDuration = Math.max(...outcomes.map(it => it.duration)) + 1;
  let bars: Array<Array<Result>> = [];

  for (let i = 0; i < divisions; i++) {
    bars.push(
      outcomes
        .filter(it => {
            return (it.duration < (maximumDuration / divisions * i) + ((maximumDuration) / divisions))
              && (it.duration >= (maximumDuration / divisions * (i - 1)) + ((maximumDuration) / divisions));
          }
        )
        .map(it => it.result)
        .sort().reverse()
    )
  }

  const maxBarItems = Math.max(...bars.map(it => it.length));
  const heightPixel = 300;

  return <>
    <strong>duration distribution </strong> todo: allow filter for duration > 0
    <TextField label="divisions" variant="outlined" value={divisions}
               onChange={(e) => setDivisions(parseInt(e.target.value))}/>
    <FullWidthWrappingFlexBox>
      <FullWidthWrappingFlexBox style={{minHeight: `${heightPixel}px`}}>
        {bars.map(
          (bar, i) => {
            return <Box key={i} display={"flex"} flexDirection={"column"} flex={`0 0 ${(100 / divisions)}%`}
                        justifyContent="flex-end">
              {bar.map((result, j) =>
                <Box key={`${i}_${j}`} style={{
                  background: colorOf(result),
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  borderTop: "1px solid #DDD",
                  borderLeft: "1px solid #888",
                  height: `${heightPixel / maxBarItems}px`
                }}/>
              )}
            </Box>;
          }
        )}
      </FullWidthWrappingFlexBox>
      <FullWidthWrappingFlexBox style={{justifyContent: "space-between"}}>
        <span>0</span><span>{prettyMilliseconds(maximumDuration * 0.25)}</span><span>{prettyMilliseconds(maximumDuration * 0.5)}</span><span>{prettyMilliseconds(maximumDuration * 0.75)}</span><span>{prettyMilliseconds(maximumDuration)}</span>
      </FullWidthWrappingFlexBox>
    </FullWidthWrappingFlexBox>

  </>


};

export default DurationsDistribution