import React from 'react';
import MyPaper from "../atoms/MyPaper";
import useGlobalState from '../../state';
import ResultPercentage from "./ResultPercentage";
import Duration from "./Duration";


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
        <Duration/>
      </MyPaper>

    </>;

  }
;


export default Overview;
