import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
import _ from 'lodash';
import React from "react";
import {colorOf} from "../../model/Result";
import useGlobalState from "../../state";

const ResultPercentage = () => {

  const [outcomes] = useGlobalState("filteredOutcomes");
  let counts = _.toPairs(_.countBy(outcomes, it => it.result));

  return <>
    <strong>results</strong>
    <FullWidthWrappingFlexBox style={{padding: "1rem"}}>
      {
        counts.map(([result, count]) =>
          <Box key={result} flex={`0 0 ${(count * 100 / outcomes.length)}%`}
               style={{height:"2rem", backgroundColor: colorOf(result), overflow: "hidden"}}>
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