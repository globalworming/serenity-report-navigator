import TestStep, {flatSteps} from "../../../model/TestStep";
import React, {FunctionComponent} from "react";
import Expandable from "../../organisms/Expandable";
import TestStepsRecursive from "./TestStepsRecursive";
import RowWithResultAggregate from "../../molecules/RowWithResultAggregate";

interface ExpandableTestStepProps {
  expandOnDepths: number
  depth: number
  tellAll: Array<TestStep>
}

export const ExpandableTestStep: FunctionComponent<ExpandableTestStepProps> = ({children, tellAll, depth, expandOnDepths}) => {
  return <Expandable depths={expandOnDepths} whatsHidden={
    <TestStepsRecursive depth={depth + 1} tellAll={tellAll} expandOnDepths={expandOnDepths + 1}/>
  }>
    <RowWithResultAggregate tellAll={flatSteps(tellAll).map(it => it.result)}>
      {children}
    </RowWithResultAggregate>
  </Expandable>
};