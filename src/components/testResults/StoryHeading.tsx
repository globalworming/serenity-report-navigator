import React, {useState} from "react";
import _ from "lodash";
import ResultImage from "../../ResultImage";
import MyPaper from "../atoms/MyPaper";
import {Box, Button, Switch} from "@material-ui/core";
import useGlobalState from "../../state";

interface StoryHeaderProps {
  name: string,
  results: Array<string>,
  children: any,
  toggle: Function,
  index: number
}


const StoryHeading = ({toggle, name, results, children, index}: StoryHeaderProps) => {
  const [view] = useGlobalState('view');
  const [expanded, setExpanded] = useState(view.detail > 0);

  const resultPairs = _.toPairs(_.countBy(results));
  let spaceNeeded = resultPairs.length * 10;
  return <><MyPaper key={name}>
    <Box display="flex" justifyContent="space-between" onClick={() => setExpanded(!expanded)}>
      <Box display="flex" flex={"1 1 0"}>
        <Box flex={`0 0 ${100 - spaceNeeded}%`}>
          {name}

        </Box>
        <Box flex={`0 0 ${spaceNeeded}%`} style={{textAlign: "right"}}>
          {
            resultPairs.map(([result, count], i) => <React.Fragment key={i}> <ResultImage
              result={result}/>&nbsp;{count}</React.Fragment>)
          }
        </Box>
      </Box>
      <Switch
        checked={expanded}
        onChange={() => toggle(index)}
        name={expanded ? "collapse" : "expand"}
        inputProps={{'aria-label': expanded ? "collapse" : "expand"}}
      />
    </Box>
  </MyPaper>
    {expanded && children}
  </>
};

export default StoryHeading