import React from 'react';
import useGlobalState from '../../state';
import ByStory from "./ByStory";
import ByScreenshots from "./ByScreenshots";
import Stats from "./stats/Stats";
import ClearButton from "../molecules/ClearButton";
import Filter from "../../model/Filter";
import View from "../../model/View";
import ByOutcome from "./ByOutcome";
import ExpandCollapseAll from "./ExpandCollapseAll";
import {ToggleSideMenu} from "./ToggleSideMenu";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";

const ExploreData = () => {
  const [view] = useGlobalState("view");
  const [outcomes] = useGlobalState("filteredOutcomes");
  const [, setFilter] = useGlobalState("filter");
  const [, setDepths] = useGlobalState("expansionDepth");

  const displayView = (view: string) => {
    const filterAndExpand = <FullWidthWrappingFlexBox style={{justifyContent: "space-between"}}>
      <Box>
        <ToggleSideMenu/>
      </Box>
      <Box>
        <ExpandCollapseAll/>
      </Box>
    </FullWidthWrappingFlexBox>;

    switch (view) {
      case View.STORY:
        return <>
          {filterAndExpand}
          <ByStory/>
        </>;
      case View.SCREENSHOTS:
        return <>
          <ToggleSideMenu/>
          <ByScreenshots/>
        </>;
      case View.STATS:
        return <>
          <ToggleSideMenu/>
          <Stats/>
        </>;
      case View.OUTCOMES:
        return <>
          {filterAndExpand}
          <ByOutcome/>
        </>
    }
    return <Stats/>
  };

  function clear() {
    setDepths(0);
    setFilter(new Filter())
  }

  return <>
    {outcomes.length === 0 && <>No Results, clear all filters? <ClearButton disabled={false} onClick={clear}/></>}
    {displayView(view)}
  </>
};

export default ExploreData
