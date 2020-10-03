import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
import _ from 'lodash';
import React from "react";
import Result from "../../model/Result";
import useGlobalState from "../../state";


function colorOf(result: string) {
  switch (result) {
    case Result.Pending:
      return "#5b6973";
    case Result.Success:
      return "#288952";
    case Result.Failure:
      return "#d5d351";
    case Result.Ignored:
      return "#a8a2bc";
    case Result.Error:
      return "#89362d";
    case Result.Skipped:
      return "#688975"
  }
  return "#008900";
}

const ResultPercentage = () => {

  const [outcomes] = useGlobalState("filteredOutcomes");
  let counts = _.toPairs(_.countBy(outcomes, it => it.result));

  return <>
    <FullWidthWrappingFlexBox style={{padding: "1rem"}}>
      {
        counts.map(([result, count]) =>
          <Box key={result} flex={`0 0 ${count * 100 / outcomes.length}%`}
               style={{padding: "1rem 0.25rem", backgroundColor: colorOf(result), overflow: "hidden"}}>
            <div>{result}</div>
          </Box>
        )
      }
    </FullWidthWrappingFlexBox>
    <FullWidthWrappingFlexBox>
      <FullWidthWrappingFlexBox style={{justifyContent: "space-around"}}>{outcomes.length} total: {
        counts.map(([result, count]) => <span key={result}>{count} {result.toLowerCase()}({(count * 100 / outcomes.length).toFixed(1)}%)</span>
        )
      }</FullWidthWrappingFlexBox>
    </FullWidthWrappingFlexBox>
  </>;
};


export default ResultPercentage