import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
import _ from 'lodash';
import React from "react";
import {colorOf} from "../../model/Result";
import useGlobalState from "../../state";

const ResultPercentage = () => {

  const [outcomes] = useGlobalState("filteredOutcomes");
  const counts = _.toPairs(_.countBy(outcomes, it => it.result));

  return <><Box flex={"0 0 300px"} lineHeight={2} padding={"0.5rem"}>
      <Box width={"100%"}><strong>{outcomes.length} results</strong></Box>
      <FullWidthWrappingFlexBox>
        <Box flex={"0 0 50px"}>
          {
            counts.map(([result, count]) =>
              <Box key={result} height={(count * 2 / outcomes.length) * counts.length + "rem"} flex={`0 0 50px`}
                   style={{background: colorOf(result)}}>
              </Box>
            )
          }
        </Box>
        <Box flex={"0 0 200px"}>
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
  </Box>
  </>;
};


export default ResultPercentage