import MyPaper from "../atoms/MyPaper";
import RowWithResultAggregate from "../molecules/RowWithResultAggregate";
import Emoji from "../atoms/Emoji";
import ResultImage from "../atoms/ResultImage";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import React from "react";
import TestOutcome from "../../model/TestOutcome";
import TestStep from "../../model/TestStep";

interface MyProps {
  tell: TestOutcome
}

const OutComeHeading = ({tell}: MyProps) => {
  const flatResults = (testSteps: Array<TestStep>) => {
    let result: Array<string> = [];
    if (!testSteps || testSteps.length === 0) return result;
    result = result.concat(Object.assign([], testSteps.map(it => it.result)));
    testSteps.forEach(testStep => result = result.concat(flatResults(testStep.children)));
    return result;
  };
  let results = flatResults(tell.testSteps);
  return <FullWidthWrappingFlexBox>
    <MyPaper>
      <RowWithResultAggregate tellAll={results}>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <Emoji label={"testCase"}>📑</Emoji>&nbsp;<ResultImage result={tell.result}/>&nbsp;{tell.title}
      </RowWithResultAggregate>
    </MyPaper>
  </FullWidthWrappingFlexBox>
};

export default OutComeHeading