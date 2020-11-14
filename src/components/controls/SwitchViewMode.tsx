import React from "react";
import {Box, Button, FormControl, Select, useTheme} from "@material-ui/core";
import LinkTo from "../atoms/LinkTo";
import useGlobalState from "../../state";
import Emoji from "../atoms/Emoji";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import MediaQuery from "../../MediaQuery";
import View from "../../model/View";
import {BreakPoints} from "../../themes";

interface TabNavProps {
  switchTo: Function
}

interface LinkToViewProps {
  view: string
}

const LinkToViewResettingDepthKeepingFilters = ({view}: LinkToViewProps) => {
  const [filter] = useGlobalState("filter");

  return <LinkTo view={view} depth={0}
                 results={filter.results}
                 text={filter.keyword}
                 outcomeId={filter.focusOutcome}
                 type={filter.focusType}
                 tag={filter.focusTag}
  />;
};

interface SwitchViewButtonProps {
  view: string
  switchTo: Function
}

const SwitchToViewButton = ({view, switchTo}: SwitchViewButtonProps) => {
  const [selectedView] = useGlobalState("view");

  return <>
    <Box onClick={() => switchTo(view)}>
      <Button disableElevation variant={selectedView === view ? "contained" : "outlined"} color={"secondary"}
              style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
        {view}&nbsp;<Emoji label={view}/>
      </Button>
      <LinkToViewResettingDepthKeepingFilters view={view}/>
    </Box>
  </>;
};

const TabularNavigation = ({switchTo}: TabNavProps) => {
  return <FullWidthWrappingFlexBox className={"switchWrapper"}
                                   style={{justifyContent: "space-around", padding: "0.2rem", paddingBottom: 0}}>
    {
      [View.STATS, View.STORY, View.OUTCOMES, View.SCREENSHOTS].map(it =>
        <React.Fragment key={it}>
          <SwitchToViewButton view={it} switchTo={switchTo}/>
        </React.Fragment>
      )
    }
  </FullWidthWrappingFlexBox>;
};

const SelectNavigation = ({switchTo}: TabNavProps) => {
  const [view] = useGlobalState("view");
  const theme = useTheme();

  return <>
    <FormControl color={"secondary"} variant={"outlined"} size={"small"}>
      <Select
        style={{background: theme.palette.secondary.main, width: "100%"}}
        native
        value={view}
        onChange={(e) => switchTo(e.target.value)}>
        {
          [View.STATS, View.STORY, View.OUTCOMES, View.SCREENSHOTS].map(it =>
            <option key={it} value={it} style={{textTransform: "capitalize"}}>
              {it}
            </option>
          )
        }
      </Select>
    </FormControl>
    <LinkToViewResettingDepthKeepingFilters view={view}/>
  </>;
};

const SwitchViewMode = () => {
  const [, setView] = useGlobalState("view");
  const [, setDepth] = useGlobalState('expansionDepth');

  const minimal = useMediaQuery(MediaQuery.smallerThan(BreakPoints.breakVievMode));

  const switchTo = (view: string) => {
    setDepth(0);
    setView(view)
  };

  return <>
    {minimal && <SelectNavigation switchTo={switchTo}/>}
    {!minimal && <TabularNavigation switchTo={switchTo}/>}
  </>
};

export default SwitchViewMode