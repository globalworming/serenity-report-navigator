import React from 'react';
import MyPaper from "../atoms/MyPaper";
import useGlobalState from '../../state';
import moment from 'moment';
import ResultPercentage from "./ResultPercentage";


const Overview = () => {
    const [outcomes] = useGlobalState("filteredOutcomes");
    if (outcomes.length === 0) {
      return null
    }

    return <MyPaper>
      <ResultPercentage/>
    </MyPaper>;

    const earliestDate = outcomes.map(it => moment(it.startTime).valueOf()).sort()[0];
    const latestDate = outcomes.map(it => moment(it.startTime).add(it.duration, 'milliseconds').valueOf()).sort().reverse()[0];
  }
;




export default Overview;
