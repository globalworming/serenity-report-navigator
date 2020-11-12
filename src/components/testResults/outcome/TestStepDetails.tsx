import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
import ResultImage from "../../atoms/ResultImage";
import DisplayRestQuery from "./DisplayRestQuery";
import React from "react";
import TestStep from "../../../model/TestStep";
import {StackTrace} from "./StackTrace";

interface TestStepDetailProps {
  tell: TestStep
  depth: number
  expandOnDepths: number
}

export const TestStepDetails = ({tell, depth, expandOnDepths}: TestStepDetailProps) => <FullWidthWrappingFlexBox
  style={{paddingTop: "0.2rem"}}>
  <Box style={{paddingLeft: `${0.1 + depth * 2}rem`}}>
    <ResultImage result={tell.result}/> {tell.description}
  </Box>
  {tell.exception && !tell.children &&
  <StackTrace tell={tell.exception} depth={depth}/>
  }
  {tell.restQuery &&
  <FullWidthWrappingFlexBox>
    <DisplayRestQuery expandOnDepths={expandOnDepths} tell={tell.restQuery}/>
  </FullWidthWrappingFlexBox>
  }
</FullWidthWrappingFlexBox>;