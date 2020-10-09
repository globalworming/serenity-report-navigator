import TestFailureCause from "../../../model/TestFailureCause";
import Expandable from "../../organisms/Expandable";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import React from "react";
import OneClickCopy from "../../molecules/OneClickCopy";

interface MyProps {
  tell: TestFailureCause
}

const DisplayTestFailureCause = ({tell}: MyProps) => {
  if (!tell) return null;

  let rootCause = tell;
  while (rootCause.rootCause) {
    rootCause = rootCause.rootCause
  }

  return <FullWidthWrappingFlexBox>
    <FullWidthWrappingFlexBox>
      <OneClickCopy text={`${rootCause.errorType} ${rootCause.message}`}/>
      <pre style={{overflowX: "auto", flex: "0 0 100%"}}>{rootCause.errorType} {rootCause.message}</pre>
    </FullWidthWrappingFlexBox>
    <Expandable depths={3} whatsHidden={
      <FullWidthWrappingFlexBox>
        <OneClickCopy text={rootCause.stackTrace.map((it) =>
          `at ${it.declaringClass}#${it.methodName}(${it.fileName}:${it.lineNumber})`).join("\n")}/>
        <pre style={{overflowX: "auto", flex: "0 0 100%"}}>{
          rootCause.stackTrace.map((it) =>
            `at ${it.declaringClass}#${it.methodName}(${it.fileName}:${it.lineNumber})`).join("\n")
        }</pre>
      </FullWidthWrappingFlexBox>
    }>
    click for stacktrace
    </Expandable>
  </FullWidthWrappingFlexBox>
};
export default DisplayTestFailureCause