import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import Pre from "../../atoms/Pre";
import OneClickCopy from "../../molecules/OneClickCopy";
import React from "react";
import Exception from "../../../model/Exception";

interface StackTraceProps {
  tell: Exception
  depth: number

}

export const StackTrace = ({tell, depth}: StackTraceProps) =>
  <FullWidthWrappingFlexBox style={{paddingLeft: `${0.1 + depth * 2}rem`}}>
    <Pre style={{color: "red"}}>
      <p>{tell.errorType} {tell.message}</p>
      <p>{
        tell.stackTrace.map((it) =>
          `at ${it.declaringClass}#${it.methodName}(${it.fileName}:${it.lineNumber})`).join("\n")
      }</p></Pre>

    <OneClickCopy
      text={`${tell.errorType} ${tell.message} \n` + tell.stackTrace.map((it) =>
        `at ${it.declaringClass}#${it.methodName}(${it.fileName}:${it.lineNumber})`).join("\n")}/>

  </FullWidthWrappingFlexBox>;