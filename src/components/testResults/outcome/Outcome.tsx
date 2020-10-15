import React from 'react';

import TestOutcome from "../../../model/TestOutcome";
import Expandable from "../../organisms/Expandable";
import TestStepsRecursive from "./TestStepsRecursive";
import OutcomeHeading from "./OutcomeHeading"
import DisplayTestFailureCause from "./DisplayTestFailureCause"
import OutcomeDescription from "./OutcomeDescription"
import {Box} from "@material-ui/core";
import {colorOf} from "../../../model/Result";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";

type MyProps = {
  tell: TestOutcome
}


const Outcome = ({tell}: MyProps) => {
  return <>
    <Box style={{border: "1px solid #AAA", margin: "1rem 0", padding: "0.5rem", borderRadius: "10px", boxShadow: `inset ${colorOf(tell.result)}  0px 0px 10px 2px`}}>
      <Expandable depths={2} whatsHidden={<>
        <OutcomeDescription tell={tell} />
        <TestStepsRecursive depth={0} tellAll={tell.testSteps}/>
      </>}>
        <OutcomeHeading tell={tell}/>
      </Expandable>
      <DisplayTestFailureCause tell={tell.testFailureCause}/>
    </Box>
  </>
};


export default Outcome;