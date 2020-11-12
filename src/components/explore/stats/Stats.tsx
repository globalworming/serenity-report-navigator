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

const Stats = () => {
    const [outcomes] = useGlobalState("filteredOutcomes");
    if (outcomes.length === 0) {
      return null
    }

    return <>
      <FullWidthWrappingFlexBox style={{paddingTop: "1rem"}}>
        <UnsuccessfulOutcomes/>
        <UnsuccessfulTags/>
      </FullWidthWrappingFlexBox>
      <FullWidthWrappingFlexBox style={{paddingTop: "1rem"}}>
        <ResultPercentage/>
        <DurationsDistribution/>
        <DurationStatistics/>
        <StepDurations/>
        <StepDurationsDistribution/>
      </FullWidthWrappingFlexBox>
    </>;

  }
;


export default Stats;
