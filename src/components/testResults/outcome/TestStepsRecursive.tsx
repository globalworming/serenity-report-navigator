import React from "react";
import TestStep from "../../../model/TestStep";
import Expandable from "../../organisms/Expandable";
import ResultImage from "../../atoms/ResultImage";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
import Delayed from "../../organisms/Delayed";
import DisplayRestQuery from "./DisplayRestQuery";

type MyProps = {
  tellAll?: Array<TestStep>,
  depth: number
}

const TestStepsRecursive = ({tellAll, depth}: MyProps) => {
  if (!tellAll || tellAll.length === 0) return null;

  const testStep = (step: TestStep) => <FullWidthWrappingFlexBox>
    <Box style={{paddingLeft: `${0.1 + depth * 2}rem`}}>
      <ResultImage result={step.result}/> {step.description}
    </Box>
    {step.restQuery &&
    <FullWidthWrappingFlexBox>
      <DisplayRestQuery tell={step.restQuery}/>
    </FullWidthWrappingFlexBox>
    }
  </FullWidthWrappingFlexBox>;

  const expandableTestStep = (step: TestStep) => <Expandable depths={3} whatsHidden={
    <Delayed wait={depth}>
      <TestStepsRecursive depth={depth + 1} tellAll={step.children}/>
    </Delayed>
  }>
    {testStep(step)}
  </Expandable>;

  return <>{
    tellAll.map((step => {
      function stepVariant() {
        if (!step.children || step.children.length === 0) return testStep(step);
        return expandableTestStep(step);
      }

      return <React.Fragment key={step.number}>{stepVariant()}</React.Fragment>;
    }))
  }</>
};
export default TestStepsRecursive