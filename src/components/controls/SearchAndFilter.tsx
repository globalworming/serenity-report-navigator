import * as React from "react";
import FilterResult from "./FilterResult";
import FilterKeywords from "./FilterKeywords";
import LinkTo from "../testResults/outcome/LinkTo";
import useGlobalState from "../../state";
import FilterTestOutcome from "./FilterTestOutcome";

const SearchAndFilter = () => {
  const [view] = useGlobalState("view");
  const [filter] = useGlobalState("filter");
  const [depth] = useGlobalState("expansionDepth");

  return <>
    <FilterKeywords/>
    <FilterResult/>
    <FilterTestOutcome/>
    <LinkTo view={view} results={filter.results} text={filter.keyword} outcomeId={filter.focusOutcome} depth={depth}/></>
};

export default SearchAndFilter