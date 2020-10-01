import React from 'react';

import TestOutcome from "../../model/TestOutcome";
import Expandable from "../organisms/Expandable";
import TestStepsRecursive from "./TestStepsRecursive";
import MyPaper from "../atoms/MyPaper";
import Emoji from "../atoms/Emoji";
import RowWithResultAggregate from "../molecules/RowWithResultAggregate";

type OutcomeProps = {
  tell: TestOutcome
}

const Outcome = ({tell}: OutcomeProps) => {
  const steps = tell.testSteps && tell.testSteps.length > 0 ? tell.testSteps : [];
  const outcomeHeading = <RowWithResultAggregate tellAll={steps.map(it => it.result)}>
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
