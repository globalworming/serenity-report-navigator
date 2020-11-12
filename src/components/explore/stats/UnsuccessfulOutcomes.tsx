import React from "react";
import useGlobalState from "../../../state";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
import _ from "lodash";
import {flatSteps} from "../../../model/TestStep";
import {colorOf} from "../../../model/Result";

const UnsuccessfulOutcomes = () => {
  const [outcomes] = useGlobalState("filteredOutcomes");
  const [filter] = useGlobalState("filter");
  const exceptionSteps = outcomes.map(it => flatSteps(it.testSteps)).flat()
    .filter(it => !!it.exception)
    .filter(it => !it.children)
    .filter(it => filter.results.length === 0 || filter.results.includes(it.result))
    .map(it => `${it.exception.errorType}/${it.result}`);
  const exceptionCount = _.countBy(exceptionSteps);

  return <>
    <FullWidthWrappingFlexBox
      style={{flex: "0 0 450px", lineHeight: 2, padding: "0.5rem", justifyContent: "space-around"}}>
      <FullWidthWrappingFlexBox>
        <strong>overview of unsuccessful</strong>
      </FullWidthWrappingFlexBox>

      <Box style={{maxHeight:"15rem", overflowY: "auto", overflowX: "hidden"}}>
      {_.sortBy(_.keys(exceptionCount), it => exceptionCount[it]).reverse().map(it => <React.Fragment key={it}>
          <Box style={{overflow: "hidden", border: `1px solid ${colorOf(it.split("/")[1])}`, margin: "0.2rem", padding: "0.2rem", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", borderLeft: `4px solid ${colorOf(it.split("/")[1])}`}}>
            <span style={{float: "right", whiteSpace: "pre"}}>{it.split("/")[0]}&nbsp;-&nbsp;{exceptionCount[it]}</span>
          </Box>
        </React.Fragment>)}
      </Box>

    </FullWidthWrappingFlexBox>
  </>


};

export default UnsuccessfulOutcomes