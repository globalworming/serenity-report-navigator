import React, {useState} from "react";
import useGlobalState from "../../../state";
import prettyMilliseconds from "pretty-ms";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import Result, {colorOf} from "../../../model/Result";
import {Box, useTheme} from "@material-ui/core";
import {flatSteps} from "../../../model/TestStep";

const StepDurationsDistribution = () => {
  const theme = useTheme();
  const [outcomes] = useGlobalState("filteredOutcomes");
  const [selected] = useGlobalState("selectedStep");
  const [divisions] = useState(30);
  if (selected === "") return null;

  const steps = outcomes.map(it => flatSteps(it.testSteps)).flat().filter(it => it.description === selected);
  if (steps.length === 0) return null;

  const maximumDuration = Math.max(...steps.map(it => it.duration));
  let bars: Array<Array<Result>> = [];

  for (let i = 0; i < divisions; i++) {
    bars.push(
      steps
        .filter(it => {
          return (it.duration <= Math.round(maximumDuration / divisions * i + maximumDuration / divisions))
              && (it.duration > Math.round(maximumDuration / divisions * (i - 1) + maximumDuration / divisions));
          }
        )
        .map(it => it.result)
        .sort().reverse()
    )
  }

  const maxBarItems = Math.max(...bars.map(it => it.length));
  const height = 12;

  return <>

      <strong>step duration distribution </strong>
      <FullWidthWrappingFlexBox>
       <Box>
         {steps[0].description}
       </Box>
      {/*<TextField label="divisions" variant="outlined" value={divisions}
                 onChange={(e) => setDivisions(parseInt(e.target.value))}/>*/}
      <FullWidthWrappingFlexBox>
        <FullWidthWrappingFlexBox style={{minHeight: `${height}rem`, background: theme.palette.background.paper}}>
          {bars.map(
            (bar, i) => {
              return <Box key={steps[0].description + i} display={"flex"} flexDirection={"column"} flex={`0 0 ${(100 / (divisions))}%`}
                          justifyContent="flex-end">
                {bar.map((result, j) =>
                  <Box key={`${i}_${j}`} style={{
                    background: colorOf(result),
                    borderBottom: "1px solid black",
                    borderRight: "1px solid black",
                    borderTop: "1px solid #DDD",
                    borderLeft: "1px solid #888",
                    height: `${height / maxBarItems}rem`
                  }}/>
                )}
              </Box>;
            }
          )}
        </FullWidthWrappingFlexBox>
        <FullWidthWrappingFlexBox style={{justifyContent: "space-between"}}>
          <span>|</span><span>|</span><span>|</span><span>|</span><span>|</span>
        </FullWidthWrappingFlexBox>
        <FullWidthWrappingFlexBox style={{justifyContent: "space-between"}}>
          <span>0</span><span>{prettyMilliseconds(maximumDuration * 0.25)}</span><span>{prettyMilliseconds(maximumDuration * 0.5)}</span><span>{prettyMilliseconds(maximumDuration * 0.75)}</span><span>{prettyMilliseconds(maximumDuration)}</span>
        </FullWidthWrappingFlexBox>
      </FullWidthWrappingFlexBox>
      </FullWidthWrappingFlexBox>
  </>


};

export default StepDurationsDistribution