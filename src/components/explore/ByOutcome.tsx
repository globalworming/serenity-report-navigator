import React from "react";
import useGlobalState from '../../state';
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import Outcome from "./outcome/Outcome";
import SelectOutcome from "./outcome/SelectOutcome";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import MediaQuery from "../../MediaQuery";
import {BreakPoints} from "../../themes";
import {Box} from "@material-ui/core";


const ByOutcome = () => {
  const [outcomes] = useGlobalState('filteredOutcomes');
  const [selected] = useGlobalState('selectedOutcome');
  const selectedOutcome = outcomes.find(it => it.id === selected);
  const minimal = useMediaQuery(MediaQuery.smallerThan(BreakPoints.breakOutcomes));

  return <>
    <FullWidthWrappingFlexBox className={"outcomes"}>
      {minimal && <>
        <SelectOutcome/>
        {selectedOutcome && <Outcome tell={selectedOutcome}/>}
      </>}
      {!minimal && <>
        <Box flex={"1 0 35%"}>
          <SelectOutcome/>
        </Box>
        <Box flex={"1 0 65%"}>
          {selectedOutcome && <Outcome tell={selectedOutcome}/>}
          {!selectedOutcome && <Outcome tell={outcomes[0]}/>}

        </Box>
      </>}
    </FullWidthWrappingFlexBox>
  </>
};

export default ByOutcome