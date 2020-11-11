import React from "react";
import useGlobalState from '../../state';
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import ExpandCollapseAll from "./ExpandCollapseAll";
import Outcome from "./outcome/Outcome";


const ByOutcome = () => {
  let [outcomes] = useGlobalState('filteredOutcomes');

  return <>
    <ExpandCollapseAll/>
    <FullWidthWrappingFlexBox className={"stories"} style={{padding: "0.25rem"}}>
    {outcomes.map((it) => {
      return <React.Fragment key={it.id}>
          <Outcome tell={it}/>
      </React.Fragment>;
    })}
    </FullWidthWrappingFlexBox>
  </>
};

export default ByOutcome