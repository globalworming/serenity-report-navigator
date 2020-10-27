import React from "react";
import TestStep from "../../../model/TestStep";
import Expandable from "../../organisms/Expandable";
import ResultImage from "../../atoms/ResultImage";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
import DisplayRestQuery from "./DisplayRestQuery";
import ScreenShot from "../../molecules/ScreenShot";

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
    return <>
      {
        step.screenshots && step.result && <FullWidthWrappingFlexBox>
          {step.screenshots.map((it, i) => <React.Fragment key={i}><Box flex={"0 1 11rem"}><ScreenShot fileName={it.screenshot} width={10}/></Box></React.Fragment>)}
        </FullWidthWrappingFlexBox>
      }
      { !step.children && testStep(step)}
      { step.children && expandableTestStep(step)}
    </>
  }

  return <>
      {tellAll.map(step => <React.Fragment key={step.number}>{stepVariant(step)}</React.Fragment>)}
  </>
};
export default TestStepsRecursive