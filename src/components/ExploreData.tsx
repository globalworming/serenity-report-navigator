import React, {FunctionComponent} from 'react';
import useGlobalState from '../state';
import ByStory from "./explore/ByStory";
import ByScreenshots from "./explore/ByScreenshots";
import Stats from "./explore/stats/Stats";
import View from "../model/View";
import ByOutcome from "./explore/ByOutcome";
import ExpandCollapseAll from "./explore/ExpandCollapseAll";
import {ToggleSideMenu} from "./controls/ToggleSideMenu";
import FullWidthWrappingFlexBox from "./molecules/FullWidthWrappingFlexBox";
import {Box, Fab, useTheme} from "@material-ui/core";
import SwitchViewMode from "./controls/SwitchViewMode";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import MediaQuery from "../MediaQuery";
import {BreakPoints} from '../themes';
import SideMenu from "./controls/SideMenu";
import ShareIcon from '@material-ui/icons/Share';
import {queryString} from "./LocalStateFromQueryParameters";

const WithSideMenu: FunctionComponent = ({children}) => {
  const [showSideMenu] = useGlobalState("showSideMenu");
  const minimalMenu = useMediaQuery(MediaQuery.smallerThan(BreakPoints.breakSideMenue));
  const theme = useTheme();


  return <>
    {showSideMenu && <Box style={{
    flex: minimalMenu ? "0 0 100%" : "0 1 20rem",
    background: minimalMenu ? "none" : theme.palette.background.default + "EE"

  }}>
    <SideMenu/>
  </Box>}
  <Box flex={"1 1 14rem"}>
    {children}
  </Box>
  </>
};

const ExploreData = () => {
  const [view] = useGlobalState("view");
  const [outcomes] = useGlobalState("filteredOutcomes");
  const [filter] = useGlobalState("filter");
  const [depth] = useGlobalState("expansionDepth");
  const [themeKey] = useGlobalState("theme");
  const theme = useTheme();

  const minimalSwitchView = useMediaQuery(MediaQuery.smallerThan(BreakPoints.breakVievMode));


  const displayView = (view: string) => {
    const filterSwitchViewAndExpand = <FullWidthWrappingFlexBox
      style={{justifyContent: "space-between", alignItems: "center"}}>
      <Box>
        <ToggleSideMenu/>
      </Box>
      <Box flex={minimalSwitchView ? "none" : "1 0 20rem"}>
        <SwitchViewMode/>
      </Box>
      <Box>
        <ExpandCollapseAll/>
      </Box>
    </FullWidthWrappingFlexBox>;

    const filterAndSwitchView = <FullWidthWrappingFlexBox
      style={{justifyContent: "space-between", alignItems: "center"}}>
      <Box>
        <ToggleSideMenu/>
      </Box>
      <Box flex={minimalSwitchView ? "none" : "1 0 20rem"}>
        <SwitchViewMode/>
      </Box>
    </FullWidthWrappingFlexBox>;


    switch (view) {
      case View.STORY:
        return <>
          {filterSwitchViewAndExpand}

          <WithSideMenu>
            <ByStory/>
          </WithSideMenu>
        </>;
      case View.SCREENSHOTS:
        return <>
          {filterAndSwitchView}

          <WithSideMenu>
            <ByScreenshots/>
          </WithSideMenu>
        </>;
      case View.STATS:
        return <>
          {filterAndSwitchView}
          <WithSideMenu>
            <Stats/>
          </WithSideMenu>
        </>;
      case View.OUTCOMES:
        return <>
          {filterSwitchViewAndExpand}
          <WithSideMenu>
            <ByOutcome/>
          </WithSideMenu>
        </>
    }
    return <Stats/>
  };

  const encodedTheme = themeKey !== "custom" ? themeKey :
    [theme.palette.primary.main, theme.palette.secondary.main, theme.palette.text.primary, theme.palette.background.default, theme.palette.background.paper].join("_");

  return <>
    {outcomes.length === 0 && <p>No Results, clear all filters?</p>}
    {displayView(view)}
    <FullWidthWrappingFlexBox style={{height: "4rem"}}>
      <Fab variant="extended" href={queryString({
        theme: encodedTheme,
        view,
        results: filter.results,
        text: filter.keyword,
        outcomeId: filter.focusOutcome,
        type: filter.focusType,
        tag: filter.focusTag,
        depth
      })}
      style={{
       position: "fixed",
       bottom: "0.5rem",
       right: "0.5rem"
      }}
      >
        Link to current view
        <ShareIcon/>
      </Fab>
    </FullWidthWrappingFlexBox>
  </>
};

export default ExploreData
