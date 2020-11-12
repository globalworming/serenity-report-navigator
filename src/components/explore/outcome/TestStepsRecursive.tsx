import React from "react";
import {Box} from "@material-ui/core";
import TestStep from "../../../model/TestStep";
import TestStepRow from "./TestStepRow";

type MyProps = {
  tellAll?: Array<TestStep>,
  depth: number
  expandOnDepths: number
}

const TestStepsRecursive = ({tellAll, depth, expandOnDepths}: MyProps) => {
  if (!tellAll || tellAll.length === 0) return null;

  return <Box paddingBottom={"1rem"} width={"100%"}>
    {tellAll.map(step => <React.Fragment key={step.number}>
      <TestStepRow tell={step} expandOnDepths={expandOnDepths} depth={depth}/>
    </React.Fragment>)}
  </Box>
};

export default TestStepsRecursive