import React from 'react';

import TestOutcome from "../../../model/TestOutcome";
import Expandable from "../../organisms/Expandable";
import TestStepsRecursive from "./TestStepsRecursive";
import OutcomeHeading from "./OutcomeHeading"
import DisplayTestFailureCause from "./DisplayTestFailureCause"
import OutcomeDescription from "./OutcomeDescription"

type MyProps = {
  tell: TestOutcome
}


const Outcome = ({tell}: MyProps) => {
  return <>
    <Expandable depths={2} whatsHidden={<>
      <OutcomeDescription tell={tell} />
      <TestStepsRecursive depth={0} tellAll={tell.testSteps}/>
    </>}>
      <OutcomeHeading tell={tell}/>
    </Expandable>
    <DisplayTestFailureCause tell={tell.testFailureCause}/>
  </>
};


export default Outcome;