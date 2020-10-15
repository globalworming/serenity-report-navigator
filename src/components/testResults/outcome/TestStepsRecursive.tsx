import React from "react";
import TestStep from "../../../model/TestStep";
import Expandable from "../../organisms/Expandable";
import ResultImage from "../../atoms/ResultImage";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
import DisplayRestQuery from "./DisplayRestQuery";

type MyProps = {
  tellAll?: Array<TestStep>,
  depth: number
}

const TestStepsRecursive = ({tellAll, depth}: MyProps) => {
  if (!tellAll || tellAll.length === 0) return null;

  const testStep = (step: TestStep) => <FullWidthWrappingFlexBox style={{paddingTop: "0.2rem", color: "white"}}>
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
      <TestStepsRecursive depth={depth + 1} tellAll={step.children}/>
  }>
    {testStep(step)}
  </Expandable>;

  function stepVariant(step: TestStep) {
    if (!step.children || step.children.length === 0) return testStep(step);
    return expandableTestStep(step);
  }

  return <>
      {tellAll.map(step => <React.Fragment key={step.number}>{stepVariant(step)}</React.Fragment>)}
  </>
};
export default TestStepsRecursive