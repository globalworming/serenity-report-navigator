import React from "react";
import TestStep from "../../../model/TestStep";
import Expandable from "../../organisms/Expandable";
import ResultImage from "../../atoms/ResultImage";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
import DisplayRestQuery from "./DisplayRestQuery";
import ScreenShot from "../../molecules/ScreenShot";
import Pre from "../../atoms/Pre";
import OneClickCopy from "../../molecules/OneClickCopy";

type MyProps = {
  tellAll?: Array<TestStep>,
  depth: number
}

const TestStepsRecursive = ({tellAll, depth}: MyProps) => {
  if (!tellAll || tellAll.length === 0) return null;

  const testStep = (step: TestStep) => <FullWidthWrappingFlexBox style={{paddingTop: "0.2rem"}}>
    <Box style={{paddingLeft: `${0.1 + depth * 2}rem`}}>
      <ResultImage result={step.result}/> {step.description}
    </Box>
    {step.exception && !step.children && <FullWidthWrappingFlexBox key={step.number} style={{paddingLeft: `${0.1 + depth * 2}rem`}}>
        <Pre style={{color: "red"}}>
          <p>{step.exception.errorType} {step.exception.message}</p>
          <p>{
            step.exception.stackTrace.map((it) =>
              `at ${it.declaringClass}#${it.methodName}(${it.fileName}:${it.lineNumber})`).join("\n")
          }</p></Pre>

        <OneClickCopy
            text={`${step.exception.errorType} ${step.exception.message} \n` + step.exception.stackTrace.map((it) =>
              `at ${it.declaringClass}#${it.methodName}(${it.fileName}:${it.lineNumber})`).join("\n")}/>

    </FullWidthWrappingFlexBox>}
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
    const screenshotWidth=20;
    return <>
      {
        step.screenshots && step.result && <FullWidthWrappingFlexBox style={{paddingLeft: `${0.1 + depth * 2}rem`}}>
          {step.screenshots.map((it, i) => <React.Fragment key={i}><Box flex={`0 1 ${screenshotWidth + 1}rem`}><ScreenShot
            fileName={it.screenshot} width={screenshotWidth}/></Box></React.Fragment>)}
        </FullWidthWrappingFlexBox>
      }
      {!step.children && testStep(step)}
      {step.children && expandableTestStep(step)}
    </>
  }

  return <Box paddingBottom={"1rem"}>
    {tellAll.map(step => <React.Fragment key={step.number}>{stepVariant(step)}</React.Fragment>)}
  </Box>
};
export default TestStepsRecursive