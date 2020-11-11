import React from 'react';
import useGlobalState from '../../state';
import ByStory from "./ByStory";
import ByScreenshots from "./ByScreenshots";
import Stats from "./stats/Stats";
import View from "../../model/View";
import ByOutcome from "./ByOutcome";
import ExpandCollapseAll from "./ExpandCollapseAll";
import {ToggleSideMenu} from "./ToggleSideMenu";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";

const ExploreData = () => {
  const [view] = useGlobalState("view");
  const [outcomes] = useGlobalState("filteredOutcomes");

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

  return <>
    {outcomes.length === 0 && <>No Results, clear all filters?</>}
    {displayView(view)}
  </>
};

export default ExploreData
