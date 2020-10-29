import * as React from "react";
import FilterResult from "./FilterResult";
import FilterKeywords from "./FilterKeywords";
import LinkTo from "../testResults/outcome/LinkTo";
import useGlobalState from "../../state";
import FilterTestOutcome from "./FilterTestOutcome";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import QuickLinks from "./QuickLinks";
import Result from "../../model/Result";
import Filter from "../../model/Filter";
import FilterTags from "./FilterTags";

const SideMenu = () => {
  const [view] = useGlobalState("view");
  const [filter] = useGlobalState("filter");
  const [depth] = useGlobalState("expansionDepth");


  const divider = <FullWidthWrappingFlexBox>
    <hr style={{width: "20%"}}/>
  </FullWidthWrappingFlexBox>;
  return <FullWidthWrappingFlexBox>

    <QuickLinks />
    {divider}


    <FilterKeywords/>
    {divider}

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