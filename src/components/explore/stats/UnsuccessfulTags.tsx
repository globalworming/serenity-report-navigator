import React from "react";
import useGlobalState from "../../../state";
import FullWidthWrappingFlexBox from "../../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
import _ from "lodash";
import Result from "../../../model/Result";
import {colorFor} from "../../App";
import {joined} from "../../../model/Tag";

const UnsuccessfulTags = () => {
  const [outcomes] = useGlobalState("filteredOutcomes");
  const tags = outcomes.filter(it => [Result.ERROR, Result.FAILURE, Result.COMPROMISED].includes(it.result))
    .map(it => it.tags).flat();
  const tagCount = _.countBy(tags, it => joined(it));
  const uniqTags = _.uniqBy(tags, it => joined(it));

  return <>
      <FullWidthWrappingFlexBox>
        <strong>tags unsuccessful</strong>
      </FullWidthWrappingFlexBox>

      <Box style={{maxHeight:"15rem", overflowY: "auto", overflowX: "hidden"}}>
        {_.sortBy(uniqTags, it => tagCount[joined(it)]).reverse().map((it) => <React.Fragment key={joined(it)}>
          <Box style={{overflow: "hidden", margin: "0.2rem", padding: "0.2rem", background: colorFor(it.type, "1F"), border: `1px solid ${colorFor(it.type)}`}} key={`${it.type}${it.displayName}`}>
            <span style={{float: "right", whiteSpace: "pre"}}>{it.type}:{it.displayName ? it.displayName : it.name} - {tagCount[joined(it)]}</span>
          </Box>
        </React.Fragment>)}
      </Box>
 </>


};

export default UnsuccessfulTags