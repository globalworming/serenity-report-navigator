import React from "react";
import {Box} from "@material-ui/core";
import CheckboxButton from "../atoms/CheckboxButton";
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
    <Box>
      <CheckboxButton checked={view === it} onClick={() => switchTo(it)}>{it}&nbsp;<Emoji label={it}/></CheckboxButton>
      <LinkTo view={it} depth={0}/>
    </Box>
  </>;


  return <Box flex={"1 1 300px"}>
      <FullWidthWrappingFlexBox style={{justifyContent: "space-between"}}>
        {
          [["story"], types].flat().map(it => <React.Fragment key={it}>
            {switchToViewButton(it)}
          </React.Fragment>)
        }
      </FullWidthWrappingFlexBox>
  </Box>
};

export default SwitchViewMode