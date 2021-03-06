import React, {FunctionComponent} from "react";
import {Box} from "@material-ui/core";
import ResultImage from "../atoms/ResultImage";
import _ from "lodash";

interface MyProps {
  tellAll: Array<string>
}

const RowWithResultAggregate: FunctionComponent<MyProps>= ({tellAll, children}) => {
  const resultPairs = _.toPairs(_.countBy(tellAll));
  let spaceNeeded = resultPairs.length * 10;

  return <Box display={"flex"} flex={"0 0 100%"}>
    <Box flex={`1 0 70%`}>
      {children}
    </Box>
    <Box flex={`0 1 ${spaceNeeded}%`} style={{textAlign: "right"}}>
      {
        resultPairs.map(([result, count], i) => <React.Fragment key={i}> <ResultImage
          result={result}/>&nbsp;{count}</React.Fragment>)
      }
    </Box>
  </Box>
};

export default RowWithResultAggregate