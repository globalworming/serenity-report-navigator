import React from 'react';
import useGlobalState from '../../state';
import ResultPercentage from "./ResultPercentage";
import DurationsDistribution from "./DurationsDistribution";
import DurationStatistics from "./DurationStatistics";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";

const Overview = () => {
    const [outcomes] = useGlobalState("filteredOutcomes");
    if (outcomes.length === 0) {
      return null
    }

    return <>
      <FullWidthWrappingFlexBox>
        <ResultPercentage/>
            <DurationsDistribution/>
            <DurationStatistics/>
      </FullWidthWrappingFlexBox>
    </>;

  }
;


export default Overview;
