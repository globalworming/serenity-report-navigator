import React from 'react';

import TestOutcome from "../../model/TestOutcome";
import Expandable from "../organisms/Expandable";
import TestStepsRecursive from "./TestStepsRecursive";
import MyPaper from "../atoms/MyPaper";
import Emoji from "../atoms/Emoji";
import RowWithResultAggregate from "../molecules/RowWithResultAggregate";
import TestStep from "../../model/TestStep";

type OutcomeProps = {
  tell: TestOutcome
}

const flatResults = (testSteps: Array<TestStep>) => {
  let result: Array<string> = [];
  if (!testSteps || testSteps.length === 0) return result;
  result = result.concat(Object.assign([], testSteps.map(it => it.result)));
  testSteps.forEach(testStep => result = result.concat(flatResults(testStep.children)));
  return result;

};

const Outcome = ({tell}: OutcomeProps) => {
  const results = flatResults(tell.testSteps);
  const outcomeHeading = <RowWithResultAggregate tellAll={results}>
    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
    <Emoji label={"testCase"}>📑</Emoji> {tell.title}
  </RowWithResultAggregate>;

  return <MyPaper>
    <Expandable expandOnGlobalDetail={2} whatsHidden={<TestStepsRecursive depth={0} tellAll={tell.testSteps}/>}>
      {outcomeHeading}
    </Expandable>
  </MyPaper>
};


export default Outcome;
