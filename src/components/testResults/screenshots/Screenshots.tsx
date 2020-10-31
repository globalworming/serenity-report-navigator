import TestStep, {flatSteps} from "../../../model/TestStep";
import React, {useState} from "react";
import TestOutcome from "../../../model/TestOutcome";
import ResultImage from "../../atoms/ResultImage";
import {Box} from "@material-ui/core";
import * as _ from "lodash";
import TestStepDescriptions from "./TestStepDescriptions";
import Controls from "./Controls";
import ScreenShot from "../../molecules/ScreenShot";

interface MyProps {
  tell: TestOutcome
  width: number
}

function hasScreenshots(it: TestStep) {
  return it.screenshots && it.screenshots.length > 0;
}

const Screenshots = ({tell, width}: MyProps) => {
  const testSteps = flatSteps(tell.testSteps);

  const screenshotToTestStep = testSteps.filter(hasScreenshots)
    .map(step => step.screenshots.map(screenshot => ({step, screenshot: screenshot.screenshot})))
    .flat();

  const sortedByStepNumber =_.sortBy(screenshotToTestStep, it => it.step.number);
  const [index, setIndex] = useState(0);
  const {screenshot, step} = sortedByStepNumber[index];

  return <React.Fragment>

    <Box flex={`1 1 ${width}rem`} maxWidth={"none"} padding={"0.5rem"}>
      <ScreenShot fileName={screenshot} width={width}/>
      <Controls fileName={screenshot} index={index} setIndex={setIndex} items={sortedByStepNumber.length}/>
    </Box>

    <Box flex={`1 1 ${width}rem`} maxWidth={"none"} padding={"0.5rem"}>
      <Box style={{padding: "0.2rem", margin: "0.5rem"}}>
        <ResultImage result={tell.result}/> {tell.title}
      </Box>
      <TestStepDescriptions depth={0} tellAll={tell.testSteps} highlight={step.number}/>
    </Box>

  </React.Fragment>
};

export default Screenshots