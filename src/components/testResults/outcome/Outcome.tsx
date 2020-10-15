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
    <Box style={{boxShadow: `${colorOf(tell.result)}  -2px 2px 0px 0px`, background: "black"}}>
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