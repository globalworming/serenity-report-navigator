import TestStep from "../../../model/TestStep";
import React, {useState} from "react";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import TestOutcome from "../../../model/TestOutcome";
import ResultImage from "../../atoms/ResultImage";
import {colorOf} from "../../../model/Result";
import {Button} from "@material-ui/core";
import Fullscreen from "./noun_Expand proportionally_1691340.svg";
import * as _ from "lodash";
import Emoji from "../../atoms/Emoji";

const flatSteps = (testSteps: Array<TestStep>) => {
  let result: Array<TestStep> = [];
  if (!testSteps || testSteps.length === 0) return result;
  result = result.concat(testSteps);
  testSteps.forEach(testStep => result = result.concat(flatSteps(testStep.children)));
  return result;
};

interface MyProps {
  tell: TestOutcome
  height: number
}

function hasScreenshots(it: TestStep) {
  return it.screenshots && it.screenshots.length > 0;
}

const Screenshots = ({tell, height}: MyProps) => {
  const testSteps = flatSteps(tell.testSteps);
  const screenshotToTestStep =
  _.sortBy(testSteps
    .filter(hasScreenshots)
    .map(
      step => step.screenshots.map(screenshot => ({step, screenshot: screenshot.screenshot}))
    )
    .flat(), it => it.step.number);

  const [index, setIndex] = useState(0);
  const {screenshot, step} = screenshotToTestStep[index];


  const style = {padding: "0.5rem", background: "#FFFFFFDD", color: "black"};
  const controlStyle = {border: "3px solid #DDBBAADD", background: "#FFFFFFDD", margin: "0.5rem"} ;
  return <React.Fragment>
    {
          <FullWidthWrappingFlexBox
            style={{
              backgroundImage: `url("./screenshots/${screenshot}")`,
              backgroundSize: "cover",
              //backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              boxShadow: `${colorOf(tell.result)} -1px -1px 10px 2px`
            }}
          >
            <span style={style}><ResultImage result={tell.result}/> {tell.title}</span>
            <FullWidthWrappingFlexBox style={{paddingTop: height + "rem"}}>
              <span style={style}><ResultImage result={step.result}/> {step.description}</span>
            </FullWidthWrappingFlexBox>
            <FullWidthWrappingFlexBox style={{paddingBottom: "1rem"}}>
              <Button style={controlStyle} variant={"text"} onClick={() => setIndex(Math.max(index - 1, 0))}>&lt;</Button>
              {
                screenshotToTestStep.map((_, i) => <Button key={i} style={{minWidth: "20px"}} variant={"text"}>{i === index ? <Emoji label={"screenshots"} /> : "*"}</Button>)
              }
              <Button style={controlStyle} variant={"text"} onClick={() => setIndex(Math.min(index + 1, screenshotToTestStep.length - 1))}>&gt;</Button>
              <Button style={controlStyle} variant={"text"} onClick={() => alert("coming soon")}><img alt={"fullscreen"} style={{width: "2rem"}} src={Fullscreen}/></Button>
            </FullWidthWrappingFlexBox>
          </FullWidthWrappingFlexBox>
    }
  </React.Fragment>
};

export default Screenshots