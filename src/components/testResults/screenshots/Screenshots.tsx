import TestStep from "../../../model/TestStep";
import React, {useState} from "react";
import TestOutcome from "../../../model/TestOutcome";
import ResultImage from "../../atoms/ResultImage";
import {Box} from "@material-ui/core";
import * as _ from "lodash";
import TestStepDescriptions from "./TestStepDescriptions";
import ScreenShot from "./ScreenShot";
import Controls from "./Controls";

const flatSteps = (testSteps: Array<TestStep>) => {
  let result: Array<TestStep> = [];
  if (!testSteps || testSteps.length === 0) return result;
  testSteps.forEach(testStep => {
    result.push(testStep);
    result.push(...flatSteps(testStep.children));
  });
  return result;
};

interface MyProps {
  tell: TestOutcome
  width: number
}

function hasScreenshots(it: TestStep) {
  return it.screenshots && it.screenshots.length > 0;
}

const Screenshots = ({tell, width}: MyProps) => {
  const testSteps = flatSteps(tell.testSteps);
  const screenshotToTestStep =
    _.sortBy(testSteps
      .filter(hasScreenshots)
      .map(
        step => step.screenshots.map(screenshot => ({step, screenShot: screenshot.screenshot}))
      )
      .flat(), it => it.step.number);

  const [index, setIndex] = useState(0);
  const {screenShot, step} = screenshotToTestStep[index];


  return <React.Fragment>

    <Box flex={`1 1 ${width}rem`} maxWidth={"none"} padding={"0.5rem"}>
      <ScreenShot fileName={screenShot} width={width}/>
      <Controls fileName={screenShot} index={index} setIndex={setIndex} items={screenshotToTestStep.length}/>
    </Box>

    <Box flex={`1 1 ${width}rem`} maxWidth={"none"} padding={"0.5rem"}>
      <Box style={{padding: "0.2rem", background: "#FFFFFFDD", color: "black", margin: "0.5rem"}}><ResultImage
        result={tell.result}/> {tell.title}</Box>
      <TestStepDescriptions depth={0} tellAll={tell.testSteps} highlight={step.number}/>
    </Box>

  </React.Fragment>
};

export default Screenshots