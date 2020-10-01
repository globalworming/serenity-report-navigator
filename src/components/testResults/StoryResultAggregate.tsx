import React from "react"
import _ from "lodash";
import TestOutcome from "../../model/TestOutcome";
import ResultImage from "../../ResultImage";
import {Box} from "@material-ui/core";

interface Props {
  outcomes: Array<TestOutcome>,
}


const StoryResultAggregate = ({outcomes}: Props) => {
  const resultPairs = _.toPairs(_.countBy(outcomes.map(it => it.result)));
  let spaceNeeded = resultPairs.length * 10;

  return <>
    <Box flex={`0 1 ${spaceNeeded}%`} style={{textAlign: "right"}}>
      {
        resultPairs.map(([result, count], i) => <React.Fragment key={i}> <ResultImage
          result={result}/>&nbsp;{count}</React.Fragment>)
      }
    </Box>
  </>
};

export default StoryResultAggregate