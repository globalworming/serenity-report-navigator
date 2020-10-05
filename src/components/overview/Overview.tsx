import React from 'react';
import MyPaper from "../atoms/MyPaper";
import useGlobalState from '../../state';
import ResultPercentage from "./ResultPercentage";
import DurationsDistribution from "./DurationsDistribution";
import DurationStatistics from "./DurationStatistics";


const Overview = () => {
    const [outcomes] = useGlobalState("filteredOutcomes");
    if (outcomes.length === 0) {
      return null
    }

    return <>
      <MyPaper>
        <ResultPercentage/>
      </MyPaper>
      <MyPaper>
        <DurationsDistribution/>
        <DurationStatistics/>
      </MyPaper>

    </>;

  }
;


export default Overview;
