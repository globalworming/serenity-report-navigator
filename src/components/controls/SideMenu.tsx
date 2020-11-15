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
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import MediaQuery from "../../MediaQuery";
import {BreakPoints} from "../../themes";
import Expandable from "../organisms/Expandable";

const SideMenu = () => {
  const [view] = useGlobalState("view");
  const [filter] = useGlobalState("filter");
  const [depth] = useGlobalState("expansionDepth");

  const minimal = useMediaQuery(MediaQuery.smallerThan(BreakPoints.breakSideMenue));

  return <FullWidthWrappingFlexBox>

    <span style={{textTransform: "capitalize"}}>search</span>
    <FilterKeywords/>
    <Divider/>

    {minimal && <>
      <Expandable depths={0} whatsHidden={<FilterResult/>}>
        <span style={{textTransform: "capitalize"}}>result</span>
      </Expandable>
    </>}
    {!minimal && <>
      <span style={{textTransform: "capitalize"}}>result</span>
      <FilterResult/>
    </>}
    <Divider/>

    {filter.focusOutcome.length > 0 && <>
      <span style={{textTransform: "capitalize"}}>outcome</span>
      <FilterTestOutcome/>
      <Divider/>
    </>
    }


    {minimal && <>
      <Expandable depths={0} whatsHidden={<QuickLinks/>}>
        <span style={{textTransform: "capitalize"}}>bookmarks</span>
      </Expandable>
    </>}
    {!minimal && <>
      <span style={{textTransform: "capitalize"}}>bookmarks</span>
      <QuickLinks/>
    </>}
    <Divider/>

    {minimal && <>
      <Expandable depths={0} whatsHidden={<FilterTags/>}>
        <span style={{textTransform: "capitalize"}}>tags</span>
      </Expandable>
    </>}
    {!minimal && <>
      <span style={{textTransform: "capitalize"}}>tags</span>
      <FilterTags/>
    </>}
    <Divider/>

    <span style={{textTransform: "capitalize"}}>share filter: <LinkTo view={view} results={filter.results}
                                                                      text={filter.keyword}
                                                                      outcomeId={filter.focusOutcome}
                                                                      type={filter.focusType}
                                                                      tag={filter.focusTag}
                                                                      depth={depth}/></span>

  </FullWidthWrappingFlexBox>
};

export default SideMenu