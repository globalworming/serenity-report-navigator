import TestFailureCause from "../../../model/TestFailureCause";
import Expandable from "../../organisms/Expandable";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import React from "react";
import OneClickCopy from "../../molecules/OneClickCopy";
import {Button} from "@material-ui/core";
import Pre from "../../atoms/Pre";

interface MyProps {
  tell: TestFailureCause
}

const DisplayTestFailureCause = ({tell}: MyProps) => {
  if (!tell) return null;

  let rootCause = tell;
  while (rootCause.rootCause) {
    rootCause = rootCause.rootCause
  }

  return <FullWidthWrappingFlexBox style={{padding: "2rem"}}>
    <FullWidthWrappingFlexBox>

      <Pre style={{color: "red"}} >{rootCause.errorType} {rootCause.message}</Pre>

      <OneClickCopy text={`${rootCause.errorType} ${rootCause.message}`}/>
    </FullWidthWrappingFlexBox>
    <Expandable depths={3} whatsHidden={
      <FullWidthWrappingFlexBox>


        <Pre style={{color: "red"}}>{
          rootCause.stackTrace.map((it) =>
            `at ${it.declaringClass}#${it.methodName}(${it.fileName}:${it.lineNumber})`).join("\n")
        }</Pre>

        <OneClickCopy text={`${rootCause.errorType} ${rootCause.message} \n` + rootCause.stackTrace.map((it) =>
          `at ${it.declaringClass}#${it.methodName}(${it.fileName}:${it.lineNumber})`).join("\n")}/>

      </FullWidthWrappingFlexBox>
    }>
    <Button style={{marginLeft: "auto"}} variant={"outlined"} color={"secondary"}>full trace</Button>
    </Expandable>
  </FullWidthWrappingFlexBox>
};
export default DisplayTestFailureCause
