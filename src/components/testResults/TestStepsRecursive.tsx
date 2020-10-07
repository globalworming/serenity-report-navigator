import React from "react";
import TestStep from "../../model/TestStep";
import Expandable from "../organisms/Expandable";
import ResultImage from "../atoms/ResultImage";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";

type MyProps = {
  tellAll?: Array<TestStep>,
  depth: number
}

const TestStepsRecursive = ({tellAll, depth}: MyProps) => {
  if (!tellAll || tellAll.length === 0) return null;

  const resultAndDescription = (testStep: TestStep) => <>
    <ResultImage result={testStep.result}/> {testStep.description}
  </>;

  const testStep = (step: TestStep) => <FullWidthWrappingFlexBox>{resultAndDescription(step)}</FullWidthWrappingFlexBox>;
  const expandableTestStep = (step: TestStep) => <Expandable expandOnGlobalDetail={3} whatsHidden={
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