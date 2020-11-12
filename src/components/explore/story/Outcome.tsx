import React from 'react';

import TestOutcome from "../../../model/TestOutcome";
import Expandable from "../../organisms/Expandable";
import TestStepsRecursive from "./TestStepsRecursive";
import OutcomeHeading from "./OutcomeHeading"
import OutcomeDescription from "./OutcomeDescription"
import {Box, useTheme} from "@material-ui/core";
import {colorOf} from "../../../model/Result";

type MyProps = {
  tell: TestOutcome
}


const Outcome = ({tell}: MyProps) => {
  const theme = useTheme();
  return <>
    <Box className={"outcome"} style={{width: "100%", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", margin: "0.2rem", borderLeft: `0.2rem solid ${colorOf(tell.result)}`, backgroundColor: theme.palette.background.default, paddingLeft: "0.5rem"}}>
      <Expandable depths={2} whatsHidden={<>
        <OutcomeDescription tell={tell} />
        <TestStepsRecursive depth={0} tellAll={tell.testSteps}/>
      </>}>
        <OutcomeHeading tell={tell}/>
      </Expandable>
    </Box>
  </>
};


export default Outcome;