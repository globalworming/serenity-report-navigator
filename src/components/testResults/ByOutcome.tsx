import React from "react";
import useGlobalState from '../../state';
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import ExpandCollapseAll from "./ExpandCollapseAll";
import Outcome from "./outcome/Outcome";
import * as _ from "lodash";
import {Box} from "@material-ui/core";


const ByOutcome = () => {
  let [outcomes] = useGlobalState('filteredOutcomes');

  return <>
    <ExpandCollapseAll/>
    <FullWidthWrappingFlexBox className={"stories"} style={{padding: "0.25rem"}}>
    {_.sortBy(outcomes, (it => it.id)).map((it) => {
      // TODO make it jira like so you have list + detail view.. but what about mobile... same like jira? open in new window?
      return <Box flex={"1 1 600px"} padding={"0.2rem"} key={it.id}>
          <Outcome tell={it}/>
      </Box>;
    })}
    </FullWidthWrappingFlexBox>
  </>
};

export default ByOutcome