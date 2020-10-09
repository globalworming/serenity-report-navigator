import * as React from "react";
import FilterResult from "./FilterResult";
import FilterKeywords from "./FilterKeywords";
import LinkTo from "../testResults/outcome/LinkTo";
import useGlobalState from "../../state";

const Search = () => {
  const [view] = useGlobalState("view");
  const [filter] = useGlobalState("filter");

  return <><FilterKeywords/><FilterResult/><LinkTo view={view} results={filter.results} text={filter.keyword}/></>
};

export default Search