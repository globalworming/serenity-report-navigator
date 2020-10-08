import React from 'react';
import MyPaper from "../atoms/MyPaper";
import useGlobalState from '../../state';
import ResultPercentage from "./ResultPercentage";
import DurationsDistribution from "./DurationsDistribution";
import DurationStatistics from "./DurationStatistics";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";

const Overview = () => {
    const [outcomes] = useGlobalState("filteredOutcomes");
    const [filter] = useGlobalState("filter");
    if (filter.focusOutcome) {
      return null
    }

    if (outcomes.length === 0) {
      return null
    }

    return <>
      <MyPaper>
        <ResultPercentage/>
      </MyPaper>

      <FullWidthWrappingFlexBox>
        <Box flex={"0 0 300px"}>
          <MyPaper>
            <DurationsDistribution/>
          </MyPaper>
        </Box>

        <Box flex={"0 0 200px"}>
          <MyPaper>
            <DurationStatistics/>
          </MyPaper>
        </Box>
      </FullWidthWrappingFlexBox>
    </>;

  }
;


export default Overview;
