import TestStep from "../../../model/TestStep";
import React, {useState} from "react";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import TestOutcome from "../../../model/TestOutcome";
import ResultImage from "../../atoms/ResultImage";
import {colorOf} from "../../../model/Result";

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

const Screenshots = ({tell, height}: MyProps) => {
  const testSteps = flatSteps(tell.testSteps);

  const firstScreenshotIndex = testSteps.findIndex(it => it.screenshots && it.screenshots.length > 0);
  const [index, setIndex] = useState(firstScreenshotIndex);

  const testStep = testSteps[index];

  const style = {padding: "0.5rem", background: "#FFFFFFDD", color: "black"};
  return <React.Fragment>
    {
      testStep.screenshots.map(it => it.screenshot)
        .map((it, j) =>
          <FullWidthWrappingFlexBox key={`${j} ${it}`}
                                    style={{
                                      background: `url("./screenshots/${it}")`,
                                      backgroundSize: "cover",
                                      //backgroundPosition: "center",
                                      backgroundRepeat: "no-repeat",
                                      boxShadow: `${colorOf(tell.result)} -1px -1px 10px 2px`
                                    }}
          >
            <span style={style}><ResultImage result={tell.result}/> {tell.title}</span>
            <FullWidthWrappingFlexBox style={{paddingTop: height + "rem"}}>

              <span style={style}>{testStep.description}</span>
            </FullWidthWrappingFlexBox>
            <span>controls</span>
          </FullWidthWrappingFlexBox>
        )
    }
  </React.Fragment>
};

export default Screenshots