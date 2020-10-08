import React from "react";
import TestStep from "../../model/TestStep";
import Expandable from "../organisms/Expandable";
import ResultImage from "../atoms/ResultImage";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";

type MyProps = {
  tellAll?: Array<TestStep>,
  depth: number
}

const TestStepsRecursive = ({tellAll, depth}: MyProps) => {
  if (!tellAll || tellAll.length === 0) return null;

  const resultAndDescription = (testStep: TestStep) => <Box style={{paddingLeft: `${0.1 + depth * 2}rem`}}>
    <ResultImage result={testStep.result}/> {testStep.description}
  </Box>;

  const testStep = (step: TestStep) => <FullWidthWrappingFlexBox>{resultAndDescription(step)}</FullWidthWrappingFlexBox>;
  const expandableTestStep = (step: TestStep) => <Expandable depths={3} whatsHidden={
    <TestStepsRecursive depth={depth + 1} tellAll={step.children}/>
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