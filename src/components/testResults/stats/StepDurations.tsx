import React from "react";
import useGlobalState from "../../../state";
import prettyMilliseconds from "pretty-ms";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {Box, useTheme} from "@material-ui/core";
import _ from "lodash";
import {flatSteps} from "../../../model/TestStep";
import Pre from "../../atoms/Pre";

const StepDurations = () => {
  const theme = useTheme();
  const [outcomes] = useGlobalState("filteredOutcomes");

  const longestRunningSteps = _.sortBy(flatSteps(outcomes.map(it => it.testSteps).flat()).filter(it => !it.children), it => it.duration).reverse();
  const grouped = _.groupBy(longestRunningSteps, it => it.description);
  const allMax = longestRunningSteps[0].duration;


  return <>
    <FullWidthWrappingFlexBox
      style={{flex: "0 0 30rem", lineHeight: 2, padding: "0.5rem", justifyContent: "space-around"}}>
      <FullWidthWrappingFlexBox>
        <strong>top 50 longest running steps, max {prettyMilliseconds(allMax)}</strong>
      </FullWidthWrappingFlexBox>
      <FullWidthWrappingFlexBox style={{maxHeight: "15rem", overflow: "auto"}}>
        {
          _.keys(grouped).slice(0, 50).map(it => {
              const steps = grouped[it];
              const min = Math.min(...steps.map(it => it.duration));
              const max = Math.max(...steps.map(it => it.duration));
              const formatted = prettyMilliseconds(max) === prettyMilliseconds(min) ? prettyMilliseconds(min) : prettyMilliseconds(min) + " - " + prettyMilliseconds(max);

              return <FullWidthWrappingFlexBox key={it}>

                <Box
                  style={{
                    width: `${max / allMax * 100}%`,
                    background: `linear-gradient(90deg, ${theme.palette.background.paper} ${min / max * 100}%, ${theme.palette.secondary.main} ${ min / max * 100}%, ${theme.palette.background.paper} ${Math.min(100, (min / max * 100) +30)}%)`,
                    borderRight: "1px solid " + theme.palette.text.primary,
                    borderBottom: "1px solid #A0A0A0",
                    overflow: "visible",
                    minHeight: "1.5rem",
                    position: "relative"
                  }}>
                  <Pre style={{
                    position: "absolute",
                    top: "0.2rem",
                    left: "0.2rem",
                    maxWidth: "28rem",
                    maxHeight: "2rem",
                    overflow: "hidden"
                  }}><span style={{backgroundColor: `#f50057${Math.min(0xFF, steps.length * 5).toString(16)}`}}>{steps.length}x</span> {formatted} {steps[0].description}</Pre>
                </Box>
              </FullWidthWrappingFlexBox>;
            }
          )
        }
      </FullWidthWrappingFlexBox>
    </FullWidthWrappingFlexBox>
  </>


};

export default StepDurations