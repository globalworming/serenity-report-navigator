import React, {FunctionComponent} from "react";
import TestStep from "../../model/TestStep";
import Expandable from "../organisms/Expandable";
import {Box} from "@material-ui/core";
import Delayed from "../organisms/Delayed";

type MyProps = {
  tellAll?: Array<TestStep>,
  depth: number
}

const HighLevelTestStep: FunctionComponent = ({children}) => {

  // FIXME green is not a creative color, add red and yellow
  return <div style={{padding: "0.25rem", marginTop: "0.25rem"}}>
    {children}
  </div>
};

const TestStepsRecursive = ({tellAll, depth}: MyProps) => {
  if (!tellAll || tellAll.length === 0) return null;

  if (depth === 0) {
    return <>
      {tellAll.map((testStep, i) => {
        if (!testStep.children) {
          return <React.Fragment key={i}>
            <HighLevelTestStep>
                {testStep.description}
            </HighLevelTestStep>
          </React.Fragment>;
        } else {
          return <React.Fragment key={i}>
            <Delayed wait={i}><Expandable expandOnGlobalDetail={3}
                        whatsHidden={<TestStepsRecursive depth={depth + 1} tellAll={testStep.children}/>}>
              <HighLevelTestStep>
                {testStep.description}
              </HighLevelTestStep>
            </Expandable></Delayed>
          </React.Fragment>;
        }
      })}
    </>
  }

  return <>
    {tellAll.map((testStep, i) => <React.Fragment key={i}>
      <Box style={{paddingLeft: `${depth * 20}px`}}>{testStep.description}</Box>
      <TestStepsRecursive depth={depth + 1} tellAll={testStep.children}/>
    </React.Fragment>)}
  </>
};
export default TestStepsRecursive