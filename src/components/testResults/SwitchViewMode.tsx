import React from "react";
import {Box, Button} from "@material-ui/core";
import LinkTo from "./outcome/LinkTo";
import useGlobalState from "../../state";
import * as _ from "lodash";
import {joined} from "../../model/Tag";
import Emoji from "../atoms/Emoji";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";

const SwitchViewMode = () => {
  const [view, setView] = useGlobalState("view");
  const [outcomes] = useGlobalState('filteredOutcomes');
  const [, setDepth] = useGlobalState('expansionDepth');

  // this expensive calculations are made in ExploreData.tsx also, could better be globally in ApplyFilter.tsx
  const tags = _.uniqBy(outcomes.map(it => it.tags).flat(), (it) => joined(it));
  const types = _.uniq(tags.map(it => it.type));//.filter(hasOutcomes);

  const switchTo = (view: string) => {
    setDepth(0);
    setView(view)

  };


  const switchToViewButton = (it: string) => <>
    <Box onClick={() => switchTo(it)}>
      <Button variant={view === it ? "contained" : "outlined"} color={"secondary"}>{it}&nbsp;<Emoji label={it}/></Button>
      <LinkTo view={it} depth={0}/>
    </Box>
  </>;


  return <Box flex={"1 1 300px"}>
      <FullWidthWrappingFlexBox style={{justifyContent: "space-between", paddingTop: "1rem"}}>
        {
          [["story"], types].flat().map(it => <React.Fragment key={it}>
            {switchToViewButton(it)}
          </React.Fragment>)
        }
      </FullWidthWrappingFlexBox>
  </Box>
};

export default SwitchViewMode