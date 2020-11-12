import TestStep from "../../../model/TestStep";
import React from "react";
import ScreenShots from "./Screenshots"
import {ExpandableTestStep} from "./ExpandableTestStep";
import {TestStepDetails} from "./TestStepDetails";

export interface TestStepProps {
  tell: TestStep
  depth: number
  expandOnDepths: number
}

const TestStepRow = ({tell, depth, expandOnDepths}: TestStepProps) => {

  const testStepDetails = <TestStepDetails tell={tell} depth={depth} expandOnDepths={expandOnDepths}/>;

  return <>
    <ScreenShots tell={tell} depth={depth}/>
    {!tell.children && testStepDetails}
    {tell.children &&
    <ExpandableTestStep tellAll={tell.children} depth={depth} expandOnDepths={expandOnDepths}>
      testStepDetails
    </ExpandableTestStep>
    }
  </>
};

export default TestStepRow