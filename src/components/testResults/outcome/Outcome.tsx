import React from 'react';

import TestOutcome from "../../../model/TestOutcome";
import Expandable from "../../organisms/Expandable";
import TestStepsRecursive from "./TestStepsRecursive";
import {Box, useTheme} from "@material-ui/core";
import {colorOf} from "../../../model/Result";
import OutcomeDescription from "./OutcomeDescription";
import Actors from "./Actors";

type MyProps = {
  tell: TestOutcome
}

const Outcome = ({tell}: MyProps) => {
  const theme = useTheme();
  return <>
    <Box className={"outcome"} style={{
      width: "100%",
      border: `0.2rem solid ${colorOf(tell.result)}`,
      borderRadius: "5px",
      padding: "0.5rem",
      backgroundColor: theme.palette.background.default
    }}>
      <Expandable depths={2} whatsHidden={<>
        {
          tell.actors && tell.actors.length > 0 && <>
          <hr />
          <Actors tellAll={tell.actors} />
          </>
        }

        <hr/>
        <TestStepsRecursive depth={0} tellAll={tell.testSteps}/>
      </>}>
        <OutcomeDescription tell={tell}/>
      </Expandable>
    </Box>
  </>
};


export default Outcome;