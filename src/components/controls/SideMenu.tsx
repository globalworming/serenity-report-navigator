import * as React from "react";
import FilterResult from "./FilterResult";
import FilterKeywords from "./FilterKeywords";
import LinkTo from "../atoms/LinkTo";
import useGlobalState from "../../state";
import FilterTestOutcome from "./FilterTestOutcome";
import FullWidthWrappingFlexBox from "../molecules/FullWidthWrappingFlexBox";
import QuickLinks from "./QuickLinks";
import FilterTags from "./FilterTags";
import Divider from "../atoms/Devider";

const SideMenu = () => {
  const [view] = useGlobalState("view");
  const [filter] = useGlobalState("filter");
  const [depth] = useGlobalState("expansionDepth");

  return <FullWidthWrappingFlexBox>

    <QuickLinks />
    <Divider/>


    <FilterKeywords/>
    <Divider/>

    <FilterResult/>
    <Divider/>

    {filter.focusOutcome.length > 0 && <>
      <span style={{textTransform: "capitalize"}}>outcome</span>
      <FilterTestOutcome/>
      <Divider/>
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