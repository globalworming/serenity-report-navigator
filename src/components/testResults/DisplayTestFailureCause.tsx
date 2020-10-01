import TestFailureCause from "../../model/TestFailureCause";
import Expandable from "../organisms/Expandable";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import React from "react";

interface MyProps {
  tell: TestFailureCause
}

const DisplayTestFailureCause = ({tell}: MyProps) => {
  return <FullWidthWrappingFlexBox>
    {tell && <Expandable expandOnGlobalDetail={0} whatsHidden={
      <FullWidthWrappingFlexBox>stacktrace</FullWidthWrappingFlexBox>
    }>
      <FullWidthWrappingFlexBox>failure root cause</FullWidthWrappingFlexBox>
    </Expandable>}
  </FullWidthWrappingFlexBox>
};
export default DisplayTestFailureCause
