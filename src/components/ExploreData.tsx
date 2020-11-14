import React from 'react';
import useGlobalState from '../state';
import ByStory from "./explore/ByStory";
import ByScreenshots from "./explore/ByScreenshots";
import Stats from "./explore/stats/Stats";
import View from "../model/View";
import ByOutcome from "./explore/ByOutcome";
import ExpandCollapseAll from "./explore/ExpandCollapseAll";
import {ToggleSideMenu} from "./controls/ToggleSideMenu";
import FullWidthWrappingFlexBox from "./molecules/FullWidthWrappingFlexBox";
import {Box} from "@material-ui/core";
import SwitchViewMode from "./controls/SwitchViewMode";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import MediaQuery from "../MediaQuery";
import {BreakPoints} from '../themes';

const ExploreData = () => {
  const [view] = useGlobalState("view");
  const [outcomes] = useGlobalState("filteredOutcomes");

  const minimal = useMediaQuery(MediaQuery.smallerThan(BreakPoints.breakVievMode));


  const displayView = (view: string) => {
    const filterSwitchViewAndExpand = <FullWidthWrappingFlexBox style={{justifyContent: "space-between", alignItems: "center"}}>
      <Box>
        <ToggleSideMenu/>
      </Box>
      <Box flex={minimal ? "none" : "1 0 650px"}>
        <SwitchViewMode/>
      </Box>
      <Box>
        <ExpandCollapseAll/>
      </Box>
    </FullWidthWrappingFlexBox>;

    const filterAndSwitchView = <FullWidthWrappingFlexBox style={{justifyContent: "space-between", alignItems: "center"}}>
      <Box>
        <ToggleSideMenu/>
      </Box>
      <Box flex={minimal ? "none" : "1 0 650px"}>
        <SwitchViewMode/>
      </Box>
    </FullWidthWrappingFlexBox>;

    switch (view) {
      case View.STORY:
        return <>
          {filterSwitchViewAndExpand}
          <ByStory/>
        </>;
      case View.SCREENSHOTS:
        return <>
          {filterAndSwitchView}
          <ByScreenshots/>
        </>;
      case View.STATS:
        return <>
          {filterAndSwitchView}
          <Stats/>
        </>;
      case View.OUTCOMES:
        return <>
          {filterSwitchViewAndExpand}
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
