import ResultImage from "../../atoms/ResultImage";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import React from "react";
import TestOutcome from "../../../model/TestOutcome";
import Emoji from "../../atoms/Emoji";

interface MyProps {
  tell: TestOutcome
}

const OutComeHeading = ({tell}: MyProps) => {
  return <FullWidthWrappingFlexBox>
      <Emoji label={"outcome"}/> <ResultImage result={tell.result}/> {tell.title}
  </FullWidthWrappingFlexBox>
};

export default OutComeHeading