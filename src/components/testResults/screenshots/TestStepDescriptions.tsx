import React from "react";
import TestStep from "../../../model/TestStep";
import ResultImage from "../../atoms/ResultImage";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
import Emoji from "../../atoms/Emoji";

type MyProps = {
  tellAll?: Array<TestStep>,
  depth: number,
  highlight: number
}

const TestStepDescriptions = ({tellAll, depth, highlight}: MyProps) => {
  if (!tellAll || tellAll.length === 0) return null;

  const testStep = (step: TestStep) => <FullWidthWrappingFlexBox style={{paddingTop: "0.2rem"}}>
    <Box style={{paddingLeft: `${0.1 + depth * 2}rem`, background: step.number === highlight ? "#88888830" : "none"}}>
      <ResultImage result={step.result}/> {step.description} {step.screenshots && step.screenshots.map((it, i) => <Emoji label={"screenshots"} key={i}/>)}
    </Box>
  </FullWidthWrappingFlexBox>;

  function stepVariant(step: TestStep) {
    if (!step.children || step.children.length === 0) return testStep(step);
    return <>
      {testStep(step)}
      {step.children && step.children.length > 0 && <TestStepDescriptions depth={depth + 1} tellAll={step.children} highlight={highlight}/>}
    </>;
  }

  return <>
      {tellAll.map(step => <React.Fragment key={step.number}>{stepVariant(step)}</React.Fragment>)}
  </>
};
export default TestStepDescriptions