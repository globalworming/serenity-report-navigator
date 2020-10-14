import TestStep from "../../../model/TestStep";
import React, {useState} from "react";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import TestOutcome from "../../../model/TestOutcome";
import ResultImage from "../../atoms/ResultImage";
import {Box, Button} from "@material-ui/core";
import Fullscreen from "./noun_Expand proportionally_1691340.svg";
import * as _ from "lodash";
import Emoji from "../../atoms/Emoji";
import TestStepDescriptions from "./TestStepDescriptions";

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


  const controlStyle = {border: "3px solid #DDBBAADD", background: "#FFFFFFDD", margin: "0.5rem"};
  return <React.Fragment>

    <Box flex={`1 1 ${width}rem`} maxWidth={"none"} padding={"0.5rem"}>
      <FullWidthWrappingFlexBox
        style={{
          backgroundImage: `url("./screenshots/${screenShot}")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //boxShadow: `${colorOf(tell.result)} -1px -1px 10px 2px`,
          width: "100%",
          display: "block",
          height: 0.8 * width +"rem"
        }}
      />
      <FullWidthWrappingFlexBox style={{padding: "1rem", justifyContent: "space-around"}}>
        <Button style={controlStyle} variant={"text"} onClick={() => setIndex(Math.max(index - 1, 0))}>&lt;</Button>
        {
          screenshotToTestStep.map((_, i) => <Button key={i} style={{
            minWidth: "20px",
            color: "white",
            background: i === index ? "rgba(57,57,57,0.87)" : "none"
          }} variant={"text"}>{i === index ? <Emoji label={"screenshots"}/> : "*"}</Button>)
        }
        <Button style={controlStyle} variant={"text"}
                onClick={() => setIndex(Math.min(index + 1, screenshotToTestStep.length - 1))}>&gt;</Button>
        <Button style={controlStyle} variant={"text"} href={`./screenshots/${screenShot}`} target={"_blank"}>
          <img alt={"fullscreen"}
               style={{width: "2rem"}}
               src={Fullscreen}/>
        </Button>
      </FullWidthWrappingFlexBox>
    </Box>


    <Box flex={`1 1 ${width}rem`} maxWidth={"none"} padding={"0.5rem"}>
      <Box style={{padding: "0.2rem", background: "#FFFFFFDD", color: "black", margin: "0.5rem"}}><ResultImage
        result={tell.result}/> {tell.title}</Box>
      <TestStepDescriptions depth={0} tellAll={tell.testSteps} highlight={step.number}/>
    </Box>

  </React.Fragment>
};

export default Screenshots