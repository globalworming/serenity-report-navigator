import React, {FunctionComponent} from "react";
import TestStep from "../../model/TestStep";
import Expandable from "../organisms/Expandable";
import {Box} from "@material-ui/core";
import Delayed from "../organisms/Delayed";
import ResultImage from "../atoms/ResultImage";

type MyProps = {
  tellAll?: Array<TestStep>,
  depth: number
}

const HighLevelTestStep: FunctionComponent = ({children}) => {

  return <div style={{padding: "0.25rem", marginTop: "0.25rem"}}>
    {children}
  </div>
};

const TestStepsRecursive = ({tellAll, depth}: MyProps) => {
  if (!tellAll || tellAll.length === 0) return null;

  const resultAndDescription = (testStep: TestStep) => <>
    <ResultImage result={testStep.result}/> {testStep.description}
  </>;

  if (depth === 0) {
    return <>
      {tellAll.map((testStep, i) => {
        if (!testStep.children) {
          return <React.Fragment key={i}>
            <HighLevelTestStep>
                {resultAndDescription(testStep)}
            </HighLevelTestStep>
          </React.Fragment>;
        } else {
          return <React.Fragment key={i}>
            <Delayed wait={i}><Expandable expandOnGlobalDetail={3}
                        whatsHidden={<TestStepsRecursive depth={depth + 1} tellAll={testStep.children}/>}>
              <HighLevelTestStep>
                {resultAndDescription(testStep)}
              </HighLevelTestStep>
            </Expandable></Delayed>
          </React.Fragment>;
        }
      })}
    </>
  }

  return <>
    {tellAll.map((testStep, i) => <React.Fragment key={i}>
      <Box style={{paddingLeft: `${2 + depth * 2}rem`}}>
        {resultAndDescription(testStep)}
      </Box>
      <TestStepsRecursive depth={depth + 1} tellAll={testStep.children}/>
    </React.Fragment>)}
  </>
};
export default TestStepsRecursive