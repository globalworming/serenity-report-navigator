import ResultImage from "../../atoms/ResultImage";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import React from "react";
import TestOutcome from "../../../model/TestOutcome";
import useGlobalState from "../../../state";
import Emoji from "../../atoms/Emoji";
import LinkTo from "../../atoms/LinkTo";

interface MyProps {
  tell: TestOutcome
}

const OutComeHeading = ({tell}: MyProps) => {
  const [view] = useGlobalState("view");

  return <FullWidthWrappingFlexBox>
      <Emoji label={"outcome"}/> <ResultImage result={tell.result}/> {tell.title} <LinkTo view={view} outcomeId={tell.id} depth={4}/>
  </FullWidthWrappingFlexBox>
};

export default OutComeHeading