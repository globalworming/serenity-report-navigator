import {Box} from "@material-ui/core";
import _ from 'lodash';
import React from "react";
import useGlobalState from "../../../state";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {colorOf} from "../../../model/Result";

const ResultPercentage = () => {

  const [outcomes] = useGlobalState("filteredOutcomes");
  const counts = _.toPairs(_.countBy(outcomes, it => it.result));

  return <>
      <strong>{outcomes.length} results</strong>
      <FullWidthWrappingFlexBox>
        <Box flex={"1 0 50px"}>
          {
            counts.map(([result, count]) =>
              <Box key={result} height={(count * 2 / outcomes.length) * counts.length + "rem"} flex={`0 0 50px`}
                   style={{background: colorOf(result)}}>
              </Box>
            )
          }
        </Box>
        <Box flex={"1 0 200px"} lineHeight={2}>
          {
            counts.map(([result, count]) => <React.Fragment key={result}>
                <FullWidthWrappingFlexBox style={{justifyContent: "space-between", paddingLeft: "1rem"}}>
                  <Box>{count}</Box>
                  <Box>{result.toLowerCase()}</Box>
                  <Box>({(count * 100 / outcomes.length).toFixed(1)}%)</Box>
                </FullWidthWrappingFlexBox>
              </React.Fragment>
            )
          }
        </Box>
      </FullWidthWrappingFlexBox>
  </>;
};


export default ResultPercentage