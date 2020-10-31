import React from "react";
import {Box, useTheme} from "@material-ui/core";
import {colorOf} from "../../model/Result";
import * as _ from "lodash";
import useGlobalState from "../../state";

const HorizontalResultPercentageLine = () => {
  const theme = useTheme();
  const [appliedFilter] = useGlobalState("hasAppliedFilter");
  const [outcomes] = useGlobalState("filteredOutcomes");
  const counts = appliedFilter ? _.toPairs(_.countBy(outcomes, it => it.result)) : [];


  return <Box height={"0.5rem"} display={"flex"} overflow={"hidden"} width={"100%"}>
    {
      counts.map(([result, count]) => <React.Fragment key={result}>
          <Box style={{boxShadow: "inset " + theme.palette.background.default + " 0px -2px 2px 1px"}} height={"100%"} width={count * 100 / outcomes.length + "%"} bgcolor={colorOf(result)}/>
        </React.Fragment>
      )
    }
  </Box>
};

export default HorizontalResultPercentageLine