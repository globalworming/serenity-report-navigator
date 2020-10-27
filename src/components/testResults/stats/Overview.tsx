import React from 'react';
import ResultPercentage from "./ResultPercentage";
import DurationsDistribution from "./DurationsDistribution";
import DurationStatistics from "./DurationStatistics";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import useGlobalState from '../../../state';
import StepDurations from "./StepDurations";

const Overview = () => {
    const [outcomes] = useGlobalState("filteredOutcomes");
    if (outcomes.length === 0) {
      return null
    }

    return <>
      <FullWidthWrappingFlexBox style={{paddingTop: "1rem", background: "black", color: "white"}}>
        <ResultPercentage/>
        <DurationsDistribution/>
        <DurationStatistics/>
        <StepDurations/>
      </FullWidthWrappingFlexBox>
    </>;

  }
;


export default Overview;
