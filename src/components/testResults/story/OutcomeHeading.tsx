import RowWithResultAggregate from "../../molecules/RowWithResultAggregate";
import ResultImage from "../../atoms/ResultImage";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import React from "react";
import TestOutcome from "../../../model/TestOutcome";
import TestStep from "../../../model/TestStep";
import LinkTo from "./LinkTo"
import useGlobalState from "../../../state";
import Emoji from "../../atoms/Emoji";

interface MyProps {
  tell: TestOutcome
}

const OutComeHeading = ({tell}: MyProps) => {
  const [view] = useGlobalState("view");

  const allResults = (testSteps: Array<TestStep>) => {
    let result: Array<string> = [];
    if (!testSteps || testSteps.length === 0) return result;
    result = result.concat(testSteps.map(it => it.result));
    testSteps.forEach(testStep => result = result.concat(allResults(testStep.children)));
    return result;
  };
  let results = allResults(tell.testSteps);
  return <FullWidthWrappingFlexBox>
      <RowWithResultAggregate tellAll={results}>
        <Emoji label={"outcome"}/> <ResultImage result={tell.result}/> {tell.title} <LinkTo view={view} outcomeId={tell.id} depth={4}/>
      </RowWithResultAggregate>
  </FullWidthWrappingFlexBox>
};

export default OutComeHeading