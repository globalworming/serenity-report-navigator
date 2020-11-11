import React from "react";
import {Box, Button} from "@material-ui/core";
import LinkTo from "./outcome/LinkTo";
import useGlobalState from "../../state";
import Emoji from "../atoms/Emoji";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import View from "../../model/View";

const SwitchViewMode = () => {
  const [view, setView] = useGlobalState("view");
  const [, setDepth] = useGlobalState('expansionDepth');
  const [filter] = useGlobalState("filter");

  const switchTo = (view: string) => {
    setDepth(0);
    setView(view)

  };

  const switchToViewButton = (it: string) => <>
    <Box onClick={() => switchTo(it)}>
      <Button disableElevation variant={view === it ? "contained" : "outlined"} color={"secondary"} style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
        {it}&nbsp;<Emoji label={it} />
      </Button>
      <LinkTo view={it} depth={0}
              results={filter.results}
              text={filter.keyword}
              outcomeId={filter.focusOutcome}
              type={filter.focusType}
              tag={filter.focusTag}
      />
    </Box>
  </>;


  return <>
      <FullWidthWrappingFlexBox className={"switchWrapper"} style={{justifyContent: "space-between", padding: "0.25rem", paddingBottom: 0}}>
        {
          [View.STATS, View.STORY, View.OUTCOMES, View.SCREENSHOTS].map(it => <React.Fragment key={it}>
            {switchToViewButton(it)}
          </React.Fragment>)
        }
      </FullWidthWrappingFlexBox>
  </>
};

export default SwitchViewMode