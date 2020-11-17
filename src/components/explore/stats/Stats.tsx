import React from 'react';
import ResultPercentage from "./ResultPercentage";
import DurationsDistribution from "./DurationsDistribution";
import DurationStatistics from "./DurationStatistics";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import useGlobalState from '../../../state';
import StepDurations from "./StepDurations";
import UnsuccessfulOutcomes from "./UnsuccessfulOutcomes";
import UnsuccessfulTags from './UnsuccessfulTags';
import StepDurationsDistribution from "./StepDurationsDistribution";
import {Box} from "@material-ui/core";

const Stats = () => {
    const [outcomes] = useGlobalState("filteredOutcomes");
    if (outcomes.length === 0) {
      return null
    }

  const defaultPadding = "0.5rem";
  return <>
      <FullWidthWrappingFlexBox>
        <Box padding={defaultPadding} flex={"1 1 18rem"}>
          <ResultPercentage/>
        </Box>

        <Box padding={defaultPadding} flex={"1 1 20rem"}>
          <UnsuccessfulOutcomes/>
        </Box>
        <Box padding={defaultPadding} flex={"1 1 25rem"}>
          <UnsuccessfulTags/>
        </Box>

        <Box padding={defaultPadding} flex={"1 1 18rem"}>
          <DurationsDistribution/>
        </Box>
        <Box padding={defaultPadding} flex={"0 1 24rem"}>
          <DurationStatistics/>
        </Box>
        <Box padding={defaultPadding} flex={"1 1 30rem"}>
          <StepDurations/>
        </Box>
        <Box padding={defaultPadding} flex={"1 1 15rem"}>
          <StepDurationsDistribution/>
        </Box>
      </FullWidthWrappingFlexBox>
    </>;

  }
;


export default Stats;
