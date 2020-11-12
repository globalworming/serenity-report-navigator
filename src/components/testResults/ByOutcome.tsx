import React from "react";
import useGlobalState from '../../state';
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import Outcome from "./outcome/Outcome";
import SelectOutcome from "./outcome/SelectOutcome";


const ByOutcome = () => {
  const [outcomes] = useGlobalState('filteredOutcomes');
  const [selected] = useGlobalState('selectedOutcome');
  const selectedOutcome = outcomes.find(it => it.id === selected);
  return <>
    <FullWidthWrappingFlexBox className={"outcomes"} style={{padding: "0.25rem"}}>
      <SelectOutcome/>
      {selectedOutcome && <Outcome tell={selectedOutcome}/>}
    </FullWidthWrappingFlexBox>
  </>
};

export default ByOutcome