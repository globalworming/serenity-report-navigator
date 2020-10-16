import * as React from "react";
import FilterResult from "./FilterResult";
import FilterKeywords from "./FilterKeywords";
import LinkTo from "../testResults/outcome/LinkTo";
import useGlobalState from "../../state";
import FilterTestOutcome from "./FilterTestOutcome";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import {Button} from "@material-ui/core";
import Result from "../../model/Result";
import Filter from "../../model/Filter";
import FilterTags from "./FilterTags";

const SideMenu = () => {
  const [view, setView] = useGlobalState("view");
  const [filter, setFilter] = useGlobalState("filter");
  const [depth, setDepths] = useGlobalState("expansionDepth");

  const showPendingStories = () => {
    const newFilter = Object.assign(new Filter(), filter);
    newFilter.results = [Result.Pending];
    setFilter(newFilter);
    setDepths(1);
    setView("story")

  };

  const showViewOutcomeErrors = () => {
    const newFilter = Object.assign(new Filter(), filter);
    newFilter.results = [Result.Failure, Result.Error, Result.Compromised];
    setFilter(newFilter);
    setDepths(4);
    setView("story")
  };

  const divider = <FullWidthWrappingFlexBox>
    <hr style={{width: "20%"}}/>
  </FullWidthWrappingFlexBox>;
  return <FullWidthWrappingFlexBox>

    <span style={{textTransform: "capitalize"}}>quick access</span>
    <Button fullWidth={true} color={"secondary"} variant={"text"} onClick={showViewOutcomeErrors}>
      trace errors <LinkTo depth={4} results={[Result.Failure, Result.Error, Result.Compromised]}/>
    </Button>
    <Button fullWidth={true} color={"secondary"} variant={"text"} onClick={showPendingStories}>
      pending stories <LinkTo depth={1} results={[Result.Pending]}/>
    </Button>
    {divider}


    <FilterKeywords/>
    {divider}

    <span style={{textTransform: "capitalize"}}>filter</span>
    <FilterResult/>
    {divider}

    {filter.focusOutcome.length > 0 && <>
      <span style={{textTransform: "capitalize"}}>outcome</span>
      <FilterTestOutcome/>
      {divider}
    </>
    }

    <span style={{textTransform: "capitalize"}}>tags</span>
    <FilterTags/>



    <span style={{textTransform: "capitalize"}}>share filter: <LinkTo view={view} results={filter.results}
                                                                      text={filter.keyword}
                                                                      outcomeId={filter.focusOutcome}
                                                                      type={filter.focusType}
                                                                      tag={filter.focusTag}
                                                                      depth={depth}/></span>

  </FullWidthWrappingFlexBox>
};

export default SideMenu