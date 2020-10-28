import React from 'react';

import TestOutcome from "../../../model/TestOutcome";
import Expandable from "../../organisms/Expandable";
import TestStepsRecursive from "./TestStepsRecursive";
import OutcomeHeading from "./OutcomeHeading"
import OutcomeDescription from "./OutcomeDescription"
import {Box} from "@material-ui/core";
import {colorOf} from "../../../model/Result";

type MyProps = {
  tell: TestOutcome
}


const Outcome = ({tell}: MyProps) => {
  return <>
    <Box className={"outcome"} style={{width: "100%", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", margin: "0.2rem", borderLeft: `0.2rem solid ${colorOf(tell.result)}`, background: "black"}}>
      <Expandable depths={2} whatsHidden={<>
        <OutcomeDescription tell={tell} />
        <TestStepsRecursive depth={0} tellAll={tell.testSteps}/>
      </>}>
        <OutcomeHeading tell={tell}/>
      </Expandable>
    </Box>
    <hr style={{margin: "0.25rem auto", width: "20%", height: "5px", backgroundColor: "#a2a2a2"}}/>
  </>
};


export default Outcome;