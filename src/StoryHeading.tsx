import React from "react";
import _ from "lodash";
import ResultImage from "./ResultImage";

interface StoryHeaderProps {
  name: string,
  results: Array<string>
}

const StoryHeading = ({name, results}: StoryHeaderProps) => {
  let result2count = _.countBy(results);
  return <h4 style={{color: "#2f2e15", width: "100%"}} key={name}>{name}{
    _.toPairs(result2count).map(([result, count], i) => <span key={i}> <ResultImage result={result}/> {count}</span>)
  }</h4>
}

export default StoryHeading